class AuthController{
    constructor(AuthService){
        this.auth_service = AuthService;
    }
    async authenticate(req, res){
        this.auth_service.login(req.user)
    }
    async register_user(req, res){
        
    }
}