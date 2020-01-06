pipeline {
  agent {
    docker {
      image 'node:12.14-alpine3.9'
    }
  }

  stages {
    stage('Build') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh 'npm config get registry'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      agent {
        docker {
          image 'docker:dind'
        }
      }
      steps {
        script {
          docker.build('panda-ui')
          docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
            docker.image('panda-ui').push('latest')
          }
        }
      }
    }
  }
}