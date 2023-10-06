/**
 * Builder: Es un patrón que permite crear objetos paso a paso lo cual a su vez esto permite crear objetos personalizables reutilizando el codigo de construcción
*/

interface IBuilderSurvey {
  addPersonalQuestions: () => void
  addJobQuestions: () => void
  addFamilyQuestions: () => void
  addExtraQuestions: () => void
  getSurvey: () => Survey
}

class ConcreteSurvey implements IBuilderSurvey {
  private survey: Survey

  constructor () {
    this.reset()
  }

  reset () {
    this.survey = new Survey()
  }
  
  addPersonalQuestions() {
    this.survey.questions.push('Whats your name?')
  }

  addJobQuestions() {
    this.survey.questions.push('What do yo do at work?')
  }

  addFamilyQuestions() {
    this.survey.questions.push('Are you married?')
  }

  addExtraQuestions() {
    this.survey.questions.push('Whats is your favorite color?')
  }

  getSurvey(): Survey {
    const survey = this.survey
    this.reset()
    return survey
  }
}

class Survey {
  public questions: string[] = []

  listQuestions(){
    console.log(this.questions)
  }
}

class DirectorSurvey {
  getWeirdSurvey(builderSurvey: IBuilderSurvey) {
    builderSurvey.addExtraQuestions()
  }

  getFamilySurvey(builderSurvey: IBuilderSurvey) {
    builderSurvey.addPersonalQuestions()
    builderSurvey.addFamilyQuestions()
  }
}


const surveyMinimal = new ConcreteSurvey()
surveyMinimal.addPersonalQuestions()
surveyMinimal.addJobQuestions()
const questions = surveyMinimal.getSurvey().questions
console.log(questions)

const surveyComplete = new ConcreteSurvey()
surveyComplete.addPersonalQuestions()
surveyComplete.addFamilyQuestions()
surveyComplete.addExtraQuestions()
surveyComplete.addJobQuestions()
const questions2 = surveyComplete.getSurvey().questions
console.log(questions2)

// It is posible to use Director class
const surveyEmpty = new ConcreteSurvey()
const directorSurvey = new DirectorSurvey()
directorSurvey.getFamilySurvey(surveyEmpty)
const questions3 = surveyEmpty.getSurvey().questions
console.log(questions3)
