class AuthService{
    static login(user){
        if(!user.email) {
            return res.status(422).json({
              errors: {
                email: 'is required',
              },
            });
          }
        
          if(!user.password) {
            return res.status(422).json({
              errors: {
                password: 'is required',
              },
            });
          }
        
          new Promise((resolve, reject) => {
            passport.authenticate('local', { session: false }, (err, passportUser, info) => {
                if(err) {
                  return reject(err)
                }
            
                if(passportUser) {
                  const user = passportUser;
                  user.token = passportUser.generateJWT();
                  resolve(user)  
                }
                reject(new Error('Login Failed'))
            })
          })
    }
} 