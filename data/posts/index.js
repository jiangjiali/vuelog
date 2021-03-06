import bookreading from './bookreading'
import familymanagement from './familymanagement'
import finance from './finance'
import importantRecords from './important_records'
import soundDesign from './sound_design'
import wiki from './wiki'
import dataAnalysis from './data_analysis'

const posts = []

function addData (data) {
  for (var i = 0; i < data.length; i++) {
    posts.push(data[i])
  }
}

addData(bookreading)
addData(familymanagement)
addData(finance)
addData(importantRecords)
addData(soundDesign)
addData(wiki)
addData(dataAnalysis)

export default posts
