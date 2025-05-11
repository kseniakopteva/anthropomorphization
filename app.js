const questionNumber = document.getElementById("question-number")
const questionText = document.getElementById("question-text")
const optionContainer = document.getElementById("option-container")
const progressBar = document.getElementById("progress-bar")
const errorContainer = document.getElementById("error-container")

let questionCounter = 0
let currentQuestion
let availableQuestions = []
let availableOptions = []
let chosenOption = null

let GS = []
let IDAQ = []

let medianGS = 0
let medianIDAQ = 0
let median = 0

let resultMessage = ""
let resultRating = ""

function setQuestions() {
    const totalQ = test.length
    for (let i = 0; i < totalQ; i++) {
        availableQuestions.push(test[i])
    }
    let otherElem = document.createElement("div")
    otherElem.innerHTML = ""
    for (let i = 0; i < availableQuestions.length; i++) {
        progressBar.appendChild(otherElem)
    }
}

// set number, text and answer options
function getNewQuestion() {
    document.getElementById("question-img").innerHTML = ""
    chosenOption = null
    errorContainer.innerHTML = ""
    questionNumber.innerHTML = questionCounter + 1 + "/" + test.length
    // random question
    const questionObj = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionObj
    questionText.innerHTML = currentQuestion.q

    // if there is an image
    if (currentQuestion.img != null) {
        // add img element
        const img = document.createElement("img")
        img.setAttribute("src", currentQuestion.img)
        document.getElementById("question-img").appendChild(img)
    }

    const id = availableQuestions.indexOf(questionObj)
    // remove it
    availableQuestions.splice(id, 1)

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

    // update the progress bar
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

function rememberResult(elem) {
    chosenOption = elem
    let qNum = chosenOption.id.split("-")[1]
    let oNum = chosenOption.id.split("-")[2]

    elem.setAttribute("onclick", "")
    for (let i = 1; i <= availableOptions.length; i++) {
        if (i != oNum) {
            document.getElementById("option-" + qNum + "-" + i).setAttribute("onclick", "rememberResult(this)")
        }
    }

    if (qNum >= 1 && qNum <= 15) {
        GS[qNum] = parseInt(oNum)
    } else {
        IDAQ[qNum] = parseInt(oNum)
    }

    errorContainer.innerHTML = ""

    for (let i = 0; i < availableOptions.length; i++) {
        if ("option-" + currentQuestion.num + "-" + (i + 1) != elem.id) {
            document.getElementById("option-" + currentQuestion.num + "-" + (i + 1)).classList.remove("chosen")
        }
    }

    elem.classList.add("chosen")
}

function next() {
    if (chosenOption === null) {
        showErrorMessage()
        return
    }
    if (questionCounter === test.length) {
        end()
    } else {
        getNewQuestion()
    }
}

function showErrorMessage() {
    errorContainer.innerHTML = "Lūdzu, izvēlieties kādu no variantiem!"
}

function start() {
    document.getElementById("introduction-block").classList.add("hide")
    document.getElementById("question-block").classList.remove("hide")
    document.getElementById("progress-bar").classList.remove("hide")
}

function end() {
    document.getElementById("question-block").classList.add("hide")
    document.getElementById("test-result-block").classList.remove("hide")
    document.getElementById("progress-bar").classList.add("hide")
    analyseResults()
    document.getElementById("IDAQ-score").innerHTML = medianIDAQ
    document.getElementById("GS-score").innerHTML = medianGS
    document.getElementById("final-score").innerHTML = median

    if (median <= 1) {
        resultRating = "ZEMS"
        resultMessage = "Jums nav izteikta tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; vienkārši sakot, Jūsu apzinātā uztverē digitālas ierīces ir tikai nedzīvi objekti -- nekas vairāk."
    } else if (median > 1 && median <= 2.5) {
        resultRating = "VIDĒJS"
        resultMessage = "Jums ir vidēji izteikta tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; vairākumā gadījumu digitālas ierīces ir vienkārši nedzīvi objekti, taču dažreiz Jums šķiet, ka tās ir līdzīgas cilvēkiem."
    } else if (median > 2.5 && median < 4) {
        resultRating = "AUGSTĀKS PAR VIDĒJO"
        resultMessage = "Jums ir diezgan liela tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; daudzos gadījumos Jums šķiet, ka tām piemīt domas, nodomi, vērtības un dzīvums."
    } else if (median >= 4) {
        resultRating = "AUGSTS"
        resultMessage = "Jums ir ļoti stipri izteikta tendence apzināti piešķirt digitālām ierīcēm cilvēkam līdzīgas īpašības; vairākumā gadījumos Jums šķiet, ka digitālas ierīces ir dzīvas, ar saviem nodomiem, domām un emocijām."
    }

    document.getElementById("result-rating").innerHTML = resultRating
    document.getElementById("result-message").innerHTML = resultMessage
}

function analyseResults() {
    // GS - 15
    for (let i = 1; i <= 15; i++) {
        medianGS += GS[i]
    }
    medianGS /= 15

    // IDAQ - 21
    for (let i = 16; i <= 36; i++) {
        medianIDAQ += IDAQ[i]
    }
    medianIDAQ /= 21

    medianGS = Math.round((medianGS + Number.EPSILON) * 100) / 100
    medianIDAQ = Math.round((medianIDAQ + Number.EPSILON) * 100) / 100

    median = (medianGS + medianIDAQ) / 2
    median = Math.round((median + Number.EPSILON) * 100) / 100
}

window.onload = function () {
    setQuestions()
    getNewQuestion()
}
