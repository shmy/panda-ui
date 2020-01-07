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
    stage('Sonar') {
        def sonarqubeScannerHome = tool name: 'sonar-scanner'
        sh "${sonarqubeScannerHome}/bin/sonar-scanner -Dsonar.host.url=http://52.82.10.96:9000 -Dsonar.projectKey=panda-ui -Dsonar.projectName=panda-ui -Dsonar.projectVersion=1 -Dsonar.sources=src -Dsonar.projectBaseDir=. -Dsonar.sourceEncoding=UTF-8 -Dsonar.login=718e7ca6ed91dfe1b706cce2339ea89fc4ab6f02"

    }

    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
