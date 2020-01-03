pipeline {
  agent {
    docker {
      image 'node:12.14-alpine3.9'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
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