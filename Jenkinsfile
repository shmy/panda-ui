#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Build') {
      environment {
        CI = 'true'
      }

    stage('Sonar') {
      sh 'cd sonar'
      docker.build('sonar')
      sh 'cd ../'
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
