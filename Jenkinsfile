pipeline {
    agent {
        docker {
            image 'node:12.14.0-alpine'
        }
    }

  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'node -v'
        sh 'npm config ls'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
          sh 'docker --version'
        }
    }
  }
}
