<template>
  <div class="main-container">
    <div class="full-width">
      <v-card>
        <v-card-title>Code Reverse-Engineering</v-card-title>
        <v-card-subtitle
          >Simply upload your source code and we'll reverse engineer your code
          into a UML Class Diagram
        </v-card-subtitle>
        <v-card-text>
          <v-stepper v-model="activeStep" vertical class="elevation-0">
            <v-stepper-step :complete="activeStep > 1" step="1">
              Choose you programming language
              <small>Currently only Java is supported</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <br />
              <v-select
                :items="programmingLanguages"
                v-model="selectedProgrammingLanguage"
                outlined
                label="Programming Language"
              ></v-select>

              <v-btn
                color="primary"
                @click="activeStep = 2"
                :disabled="!selectedProgrammingLanguage"
              >
                Continue
              </v-btn>
            </v-stepper-content>
            <v-stepper-step :complete="activeStep > 2" step="2">
              Upload your source code
              <small>Please upload your source code as a zip archive</small>
            </v-stepper-step>

            <v-stepper-content step="2">
              <br />

              <v-file-input
                accept="application/zip"
                show-size
                label="Source Code"
                v-on:change="uploadSourceCode"
                outlined
              ></v-file-input>

              <v-btn color="primary" @click="activeStep = 2">
                Continue
              </v-btn>
              <v-btn text @click="activeStep = 1">
                Back
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import JSZip from 'jszip'

@Component
export default class CodeReverseEngineering extends Vue {
  private readonly programmingLanguages = ['Java']

  private activeStep = 1
  private selectedProgrammingLanguage = ''

  private uploadedSourceCode: ProgressEvent<FileReader>
  private treeViewItems: TreeViewItem[] = []

  public uploadSourceCode(file: File) {
    const fileReader = new FileReader()

    fileReader.onload = file => {
      this.uploadedSourceCode = file

      this.convertFilesToTreeView(file)
    }

    fileReader.readAsBinaryString(file)
  }

  private convertFilesToTreeView(file: ProgressEvent<FileReader>) {
    if (file && file.target && file.target.result) {
      new JSZip().loadAsync(file.target.result).then(zip => {
        Object.keys(zip.files).forEach(filename => {
          if (filename.endsWith('.java')) {
            console.log(filename)
          }
        })
      })
    }
  }

  private addEntryToFiles(filename: string) {
    const splitFilename = filename.split(filename, '/')

    splitFilename.forEach(filenameSegment => {
      for (const treeViewItem of this.treeViewItems) {
        const foundTreeViewItem = this.findTreeViewItemById(
          treeViewItem,
          filenameSegment
        )

        if (foundTreeViewItem) {
          break
        }
      }
    })
  }

  private findTreeViewItemById(
    treeViewItem: TreeViewItem,
    name: string
  ): TreeViewItem | null {
    if (treeViewItem.name === name) {
      return treeViewItem
    }
    let result: TreeViewItem | null = null
    for (const key in treeViewItem) {
      if (
        // eslint-disable-next-line no-prototype-builtins
        treeViewItem.hasOwnProperty(key) &&
        typeof treeViewItem[key] === 'object'
      ) {
        result = this.findTreeViewItemById(treeViewItem[key], name)
        if (result) {
          return result
        }
      }
    }
    return result
  }
}

interface TreeViewItem {
  name: string
  file?: string
  children?: TreeViewItem[]
}
</script>

<style scoped lang="scss">
div.main-container {
  padding: 25px;
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  width: 80%;
}
</style>
