const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const optionContainer = document.getElementById("option-container")
const progressBar = document.getElementById("progress-bar")
const errorContainer = document.getElementById("error-container")
const questionBlock = document.getElementById("question-block")
const resultBlock = document.getElementById("test-result-block")
const introBlock = document.getElementById("introduction-block")
const GSlen = 15 // Godspeed testa vienību skaits
const IDAQlen = 21 // IDAQ testa vienību skaits

let questionCounter = 0
let currentQuestion
let availableQuestions = []
let availableOptions = []
let chosenOption = null

let GS = []
let IDAQ = []

let averageGS = 0
let averageIDAQ = 0
let totalAverage = 0

let resultMessage = ""
let resultRating = ""

function setQuestions() {
    const totalQ = test.length

    // aizpildam masīvu ar visiem jautājumiem
    for (let i = 0; i < totalQ; i++) {
        availableQuestions.push(test[i])
    }
    // aizpildam progresa joslu
    let otherElem = document.createElement("div")
    otherElem.innerHTML = ""
    for (let i = 0; i < availableQuestions.length; i++) {
        progressBar.appendChild(otherElem)
    }
}

// iestatām jautājuma numuru, tekstu, atbilžu variantus un attēlu, ja ir
function getNewQuestion() {
    document.getElementById("question-img").innerHTML = ""
    chosenOption = null
    errorContainer.innerHTML = ""
    questionNumber.innerHTML = questionCounter + 1 + "/" + test.length

    // nejaušs jautājums
    const questionObj = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionObj
    questionText.innerHTML = currentQuestion.q

    // ja ir attēls
    if (currentQuestion.img != null) {
        // pievienojam attēlu
        const img = document.createElement("img")
        img.setAttribute("src", currentQuestion.img)
        document.getElementById("question-img").appendChild(img)
    }

    // nodzēšam jau parādīto jautājumu no pieejamiem jautājumiem
    const id = availableQuestions.indexOf(questionObj)
    availableQuestions.splice(id, 1)

    // pievienojam atbilžu variantus
    const totalOpt = currentQuestion.options.length
    availableOptions = []
    for (let i = 0; i < totalOpt; i++) {
        availableOptions.push(currentQuestion.options[i])
    }
    optionContainer.innerHTML = ""
    let animDelay = 0.2
    for (let i = 0; i < totalOpt; i++) {
        const option = document.createElement("div")
        option.innerHTML = currentQuestion.options[i]
        option.id = "option-" + currentQuestion.num + "-" + (i + 1)
        option.style.animationDelay = animDelay + "s"
        animDelay += 0.1
        option.className = "option"
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "rememberResult(this)")
    }

    // atjauninām progresa joslu
    progressBar.innerHTML = ""
    for (let i = 0; i < questionCounter; i++) {
        let completeElem = document.createElement("div")
        completeElem.innerHTML = ""
        completeElem.className = "complete"
        progressBar.appendChild(completeElem)
    }
    let completeElem = document.createElement("div")
    completeElem.innerHTML = ""
    completeElem.className = "complete-last"
    progressBar.appendChild(completeElem)
    for (let i = questionCounter; i < test.length; i++) {
        let otherElem = document.createElement("div")
        otherElem.innerHTML = ""
        progressBar.appendChild(otherElem)
    }

    questionCounter++
}

// ierakstām rezultātu masīvos
function rememberResult(elem) {
    chosenOption = elem
    let questionNum = chosenOption.id.split("-")[1]
    let optionNum = chosenOption.id.split("-")[2]

    elem.setAttribute("onclick", "")
    for (let i = 1; i <= availableOptions.length; i++) {
        if (i != optionNum) {
            document.getElementById("option-" + questionNum + "-" + i).setAttribute("onclick", "rememberResult(this)")
        }
    }

    if (questionNum >= 1 && questionNum <= 15) {
        GS[questionNum] = parseInt(optionNum)
    } else {
        IDAQ[questionNum - 15] = parseInt(optionNum)
    }

    errorContainer.innerHTML = ""

    for (let i = 0; i < availableOptions.length; i++) {
        if ("option-" + currentQuestion.num + "-" + (i + 1) != elem.id) {
            document.getElementById("option-" + currentQuestion.num + "-" + (i + 1)).classList.remove("chosen")
        }
    }

    elem.classList.add("chosen")
}

// ja tiek izvēlēts kāds no variantiem, parādām nākamo jautājumu
function next() {
    if (chosenOption === null) {
        errorContainer.innerHTML = "Lūdzu, izvēlieties kādu no variantiem!"
        return
    }
    if (questionCounter === test.length) {
        // ja jautājumi beidzās, parādām rezultātus
        end()
    } else {
        getNewQuestion()
    }
}

function start() {
    introBlock.classList.add("hide")
    questionBlock.classList.remove("hide")
    progressBar.classList.remove("hide")
}

// analizējām rezultātus un ierakstām datus lapā
function end() {
    questionBlock.classList.add("hide")
    resultBlock.classList.remove("hide")
    progressBar.classList.add("hide")
    analyseResults()
    document.getElementById("IDAQ-score").innerHTML = averageIDAQ
    document.getElementById("GS-score").innerHTML = averageGS
    document.getElementById("final-score").innerHTML = totalAverage

    if (totalAverage <= 1) {
        resultRating = "ZEMS"
        resultMessage = "Jums nav izteikta tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; vienkārši sakot, Jūsu apzinātā uztverē digitālas ierīces ir tikai nedzīvi objekti -- nekas vairāk."
    } else if (totalAverage > 1 && totalAverage <= 2.5) {
        resultRating = "VIDĒJS"
        resultMessage = "Jums ir vidēji izteikta tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; vairākumā gadījumu digitālas ierīces ir vienkārši nedzīvi objekti, taču dažreiz Jums šķiet, ka tās ir līdzīgas cilvēkiem."
    } else if (totalAverage > 2.5 && totalAverage < 4) {
        resultRating = "AUGSTĀKS PAR VIDĒJO"
        resultMessage = "Jums ir diezgan liela tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; daudzos gadījumos Jums šķiet, ka tām piemīt domas, nodomi, vērtības un dzīvums."
    } else if (totalAverage >= 4) {
        resultRating = "AUGSTS"
        resultMessage = "Jums ir ļoti stipri izteikta tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; vairākumā gadījumos Jums šķiet, ka digitālas ierīces ir dzīvas, ar saviem nodomiem, domām un emocijām."
    }

    document.getElementById("result-rating").innerHTML = resultRating
    document.getElementById("result-message").innerHTML = resultMessage
}

// aprēķinām vidējo katrā no masīviem un kopējo vidējo vērtību
function analyseResults() {
    averageGS = Math.round((average(GSlen, GSlen, GS) + Number.EPSILON) * 100) / 100
    averageIDAQ = Math.round((average(IDAQlen, IDAQlen, IDAQ) + Number.EPSILON) * 100) / 100

    totalAverage = Math.round(((averageGS + averageIDAQ) / 2 + Number.EPSILON) * 100) / 100
}

function average(end, length, arr) {
    let average = 0
    for (let i = 1; i <= end; i++) {
        average += arr[i]
    }
    return average / length
}

window.onload = function () {
    setQuestions()
    getNewQuestion()
}
