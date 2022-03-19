Feature: Busca no Banco de Questões
  Scenario Outline: Busca por questão por categoria

    Given que navego para a pagina de busca do banco de questoes <url>
    When acesso Browse <>
    And digito Science Computers no campo de busca <>
    And seleciono categoria Science Computers <>
    And clico no botao de buscar <>
    Then consta 25 itens <>
    Then visualizo controle de paginacao <>

    Examples:
      | url         |
      | Open Trivia |
