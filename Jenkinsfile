#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Build') {
      environment {
        CI = 'true'
      }
      docker.image('node:alpine').inside {
            sh 'node -v'
            sh 'npm -v'
            sh 'npm config set registry https://registry.npm.taobao.org'
            sh 'npm config get registry'
            sh 'npm install'
            sh 'npm run test:coverage'
            sh 'npm run build'
            }
        }
      dir('sonar') {
        sh 'docker build -t sonar .'
      }
      sh 'ls -a'
      docker.image('sonar').inside() {
        sh 'sonar-scanner'
      }
    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }

}
