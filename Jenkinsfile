pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'node -v || true'
        sh 'npm ci'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Deploy (placeholder)') {
      steps {
        echo 'Deploying... (replace with real deploy script)'
        sh 'echo "Deployment successful!"'
      }
    }
  }

  post {
    success { echo '✅ Pipeline succeeded' }
    failure { echo '❌ Pipeline failed' }
  }
}
