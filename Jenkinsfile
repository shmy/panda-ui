#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }


    stage('Sonar') {
      def sonarqubeScannerHome = tool name: 'sonar-scanner'

      sh "${sonarqubeScannerHome}/bin/sonar-scanner -Dsonar.projectBaseDir=$(PWD)"
    }
    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
