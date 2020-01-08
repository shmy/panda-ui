#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Build') {
      environment {
        HOME = '.'
        CI = true
      }
      dir('sonar') {
        sh 'docker build -t sonar .'
      }
      docker.image('sonar').inside() {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
        sh 'npm run test:coverage'
        sh 'npm run build'
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
