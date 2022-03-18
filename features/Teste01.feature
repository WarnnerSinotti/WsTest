Feature: Busca no Banco de Questões
  Scenario Outline: Busca por questão inexistente

    Given que navego para a pagina de busca do banco de questoes <Account>
    When digito Science Computers no campo de busca <>
    When clico no botao de buscar <>
    Then visualizo uma mensagem de erro com o texto No questions found. <>

    Examples:
      | Account |
      | 01      |
