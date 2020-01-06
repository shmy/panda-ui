pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
          docker {
            image 'node:12.14-alpine3.9'
          }
        }
      environment {
        CI = 'true'
      }
      steps {
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
      }
    }

    stage('Build Image') {
      steps {
        script {
          docker.build('panda-ui')
        }
      }
    }

    stage('Push Image') {
      steps {
        script {
          docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
            docker.image('panda-ui').push('latest')
          }
        }
      }
    }
  }
}