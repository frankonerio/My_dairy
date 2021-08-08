import path from 'path'

class SignUpPageController {
  static fetchSignupPage (request, response) {
    return response.sendFile(path.join(__dirname, '../../Client/signup/index.html'));
  }
}

export default SignUpPageController
