class CredentialService {
    getUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }
}

export default new CredentialService();