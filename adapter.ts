/*
 *  Adapter: Es un patron que permite interactuar entre 2 objetos con diferentes interfaces.
 */

interface ICSVData {
  nameFile: string
  data: string
}

interface ICatModelData {
  color: string
  years: number
  weight: number
  height: number
  width: number
  isCat: boolean
}

class MachineLearningModel {
  inputCSV: ICSVData
  constructor (input?: ICSVData) {
    this.inputCSV = input
  }
  makeMLModel () {
    const rows = this.inputCSV.data.split('\n')
    const data = []
    for(const row of rows) {
      const [color, years, weight, height, width, isCat] = row.split(',')
      data.push({
        color,
        years: Number(years),
        weight: Number(weight),
        height: Number(height),
        width: Number(width),
        isCat: isCat.toLowerCase() === 'true'
      })
    }
    console.log('modelo de ML realizada con los sgtes. datos csv ' + JSON.stringify(data))
  }
}

class MachineLearningModelThird {
  data: ICatModelData[]
  constructor() {
    this.data = []
  }
  addData(dataInput: ICatModelData) {
    this.data.push(dataInput)
  }
}

class MachineLearningModelAdapter extends MachineLearningModel{
  private machineLearningModel: MachineLearningModelThird
  constructor (mlModel: MachineLearningModelThird) {
    super()
    this.machineLearningModel = mlModel
  }

  makeMLModel(): void {
    const data = this.machineLearningModel.data
    console.log('modelo de ML realizada con los sgtes. datos json ' + JSON.stringify(data))
  }
}

function executeMLModel (mlModel: MachineLearningModel) {
  mlModel.makeMLModel()
}

const csvData: ICSVData = {
  nameFile: 'file.csv',
  data: `red,4,3,3,3, true
brown,2,3,3,3,true
brown,10,12,3,3,false`
}

const mlModel = new MachineLearningModel(csvData)
executeMLModel(mlModel)


const mlModelJSON = new MachineLearningModelThird()
mlModelJSON.addData({
  "color": "brown",
  "years": 10,
  "weight": 12,
  "height": 3,
  "width": 3,
  "isCat": false
})
mlModelJSON.addData({
  "color": "blue",
  "years": 10,
  "weight": 12,
  "height": 3,
  "width": 3,
  "isCat": false
})
const mlAdapter = new MachineLearningModelAdapter(mlModelJSON)
executeMLModel(mlAdapter)
