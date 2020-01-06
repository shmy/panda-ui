pipeline {
  agent any
  tools { nodejs: 'node12'}
  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh '/bin/node -v'
        sh '/bin/npm -v'
        sh '/bin/npm config set registry https://registry.npm.taobao.org'
        sh '/bin/npm config get registry'

      }
    }

    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
