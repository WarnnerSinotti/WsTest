Feature: Busca no Banco de Questões
  Scenario Outline: Busca por questão por categoria

    Given que navego para a pagina de busca do banco de questoes <Account>
    When acesso Browse <>
    When digito Science Computers no campo de busca <>
    When seleciono categoria Science Computers <>
    When clico no botao de buscar <>
    Then consta 25 itens <>
    Then visualizo controle de paginacao <>

    Examples:
      | Account |
      | 01      |
