# Implementação de UTM Utils - Resumo

## O que foi feito:

### 1. Criação do arquivo `utm-utils.js`
- Função utilitária centralizada para gerenciar parâmetros UTM
- Funcionalidades incluem:
  - Captura de UTMs da URL atual
  - Armazenamento no localStorage
  - Recuperação de UTMs armazenados
  - Combinação de UTMs atuais com armazenados
  - Redirecionamento preservando todos os UTMs

### 2. Atualizações em todos os arquivos index.html

#### Páginas atualizadas com UTM utils:
- ✅ `/01/index.html` - Redirecionamento para `/02/index.html`
- ✅ `/02/index.html` - Redirecionamento para `/03/index.html`  
- ✅ `/03/index.html` - Redirecionamento para `/04/index.html`
- ✅ `/04/index.html` - Redirecionamento para `/05/index.html`
- ✅ `/05/index.html` - Apenas inicialização (sem redirecionamentos)
- ✅ `/06/index.html` - Redirecionamento automático para `/07/index.html`
- ✅ `/07/index.html` - Redirecionamento para `/08/index.html`
- ✅ `/08/index.html` - Apenas inicialização (sem redirecionamentos)
- ✅ `/09/index.html` - Múltiplos redirecionamentos para `/10/index.html`
- ✅ `/10/index.html` - Apenas inicialização (sem redirecionamentos)
- ✅ `/11/index.html` - Redirecionamento para `/12/index.html`
- ✅ `/12/index.html` - Apenas inicialização (sem redirecionamentos)
- ✅ `/13/index.html` - Redirecionamento para `/14/index.html`
- ✅ `/14/index.html` - Redirecionamento automático para `/15/index.html`
- ✅ `/15/index.html` - Redirecionamento para checkout externo
- ✅ `/consulta/index.html` - Redirecionamento para `/01/index.html`

### 3. Melhorias implementadas:

#### Consistência de redirecionamentos:
- Todos os redirecionamentos agora apontam especificamente para `index.html`
- Uso padronizado da função `utmUtils.redirectWithUTMs()`

#### Preservação de UTMs:
- UTMs são capturados e armazenados automaticamente em cada página
- UTMs atuais têm prioridade sobre os armazenados
- Suporte para parâmetros: `utm_*`, `sub*`, `xcod`, `sck`

#### Funcionalidades:
- Inicialização automática quando a página carrega
- Logs no console para debug
- Combinação inteligente de UTMs da URL + localStorage

## Como funciona:

1. **Ao carregar uma página**: UTMs são capturados da URL e armazenados
2. **Ao fazer redirecionamento**: UTMs atuais + armazenados são preservados
3. **Prioridade**: UTMs da URL atual têm prioridade sobre os armazenados
4. **Persistência**: UTMs ficam salvos no localStorage entre páginas

## Benefícios:

- ✅ Rastreamento consistente em todo o funil
- ✅ Não perda de dados de origem do tráfego
- ✅ Código reutilizável e centralizado
- ✅ Fácil manutenção e debug
- ✅ Todos os redirecionamentos renderizam `index.html`
