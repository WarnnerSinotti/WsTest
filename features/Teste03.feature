Feature: Busca no Banco de Questões
  Scenario Outline: Busca por questão por categoria

    Given Acesso Page <url>
    When Clico em todos os buttons <>
    Then Confirmo URL Pagina <>

      Examples:
      | url         |
      | Open Trivia |