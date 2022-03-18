Feature: Busca no Banco de Questões
  Scenario Outline: Busca por questão por categoria

    Given Acesso Page Open Trivia <Account>
    When Clico em todos os buttons <>
    Then Pagina Sucesso <>

    Examples:
      | Account |
      | 01      |
