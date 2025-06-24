// Função utilitária para lidar com parâmetros UTM
function UTMUtils() {
    return {
        // Captura todos os parâmetros UTM da URL atual
        getCurrentUTMs: function() {
            const params = new URLSearchParams(window.location.search);
            const utmParams = {};
            
            params.forEach((value, key) => {
                if (key.startsWith('utm_') || key.startsWith('sub') || key === 'xcod' || key === 'sck') {
                    utmParams[key] = value;
                }
            });
            
            return utmParams;
        },

        // Armazena parâmetros UTM no localStorage
        storeUTMs: function() {
            const utmParams = this.getCurrentUTMs();
            if (Object.keys(utmParams).length > 0) {
                localStorage.setItem('utmParams', JSON.stringify(utmParams));
                console.log('Parâmetros UTM armazenados:', utmParams);
            }
        },

        // Recupera parâmetros UTM do localStorage
        getStoredUTMs: function() {
            const stored = localStorage.getItem('utmParams');
            return stored ? JSON.parse(stored) : {};
        },

        // Combina UTMs da URL atual com os armazenados
        getAllUTMs: function() {
            const currentUTMs = this.getCurrentUTMs();
            const storedUTMs = this.getStoredUTMs();
            return { ...storedUTMs, ...currentUTMs }; // UTMs atuais têm prioridade
        },

        // Converte objeto de UTMs para string de query
        buildQueryString: function(utmParams) {
            const params = new URLSearchParams();
            Object.entries(utmParams).forEach(([key, value]) => {
                if (value) {
                    params.append(key, value);
                }
            });
            return params.toString();
        },

        // Redireciona preservando todos os UTMs
        redirectWithUTMs: function(url) {
            const allUTMs = this.getAllUTMs();
            const queryString = this.buildQueryString(allUTMs);
            
            let finalUrl = url;
            if (queryString) {
                finalUrl += (url.includes('?') ? '&' : '?') + queryString;
            }
            
            console.log('Redirecionando para:', finalUrl);
            window.location.href = finalUrl;
        },

        // Inicializa os UTMs quando a página carrega
        init: function() {
            this.storeUTMs();
        }
    };
}

// Instanciar e inicializar automaticamente
const utmUtils = UTMUtils();
