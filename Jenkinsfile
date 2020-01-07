#!groovy
node {
    stage ("Checkout") {
      checkout scm
    }

    stage('Sonar') {
      sh 'ls -a'
      sh 'sonar-scanner'
      docker.run();
    }
    stage('Deploy') {
        docker.build('panda-ui')
        docker.withRegistry('https://955095959256.dkr.ecr.cn-northwest-1.amazonaws.com.cn', 'ecr:cn-northwest-1:panda-ecr') {
          docker.image('panda-ui').push('latest')
        }
    }
}
