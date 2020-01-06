pipeline {
  agent any
  tools {nodejs "node"}

  stages {
    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'npm install'
        sh 'npm run test:coverage'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}