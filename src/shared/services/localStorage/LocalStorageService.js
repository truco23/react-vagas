const key = 'key:vagas';

class LocalStorageService {

    getToken() {
        return window.localStorage.getItem(key);
    };

    setToken(token) {
        window.localStorage.setItem(key, token);
    };

    hasToken() {
        return this.getToken();
    };
}

export default LocalStorageService;