## Objetivos

#### Transformar as principais interações do console em Controllers
- [x] ModuloController (Get nas informações do modulo no banco)

#### Cria DTOs para manter a organização
- [x] ModuloResponseDto
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "e3Lib": "string",
  "nome": "string",
  "tipoModulo": 0,
  "subtipo": 0,
  "categoria": 0,
  "moduloPrincipalId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}

- [ ] ModuloImportDto
informações:
        e3lib: "GMPEST",
        nome: "GMP - Sensor Gás e Umidade Dissolvidos no Óleo Isolante",
        protocolo: "MODBUS",
        versaoMajor: "12",
        nomeLib: "MDB_GMPEST_V12",
        versaoFirmware: "v12[fw12]",
        tagMapa: "v12-MDB",
        tipoModulo: "1 (Supervisao)",
        subtipo: "11 (Gmp)",
        categoria: "1 (Integral)",



#### Criar Testes unitarios para as Controllers
- [ ] ModuloControllerTest 


#### layout do frontend
- [x] Escolher o layout do frontend
- [x] Criar o Layaut no Figma
- [x] Implementar a logica de conforme avança no formulario a linhas do tempo sigam
https://dribbble.com/shots/6337480-Stepper-Multi-Step-form
https://dribbble.com/shots/24035914-Questionnaire-Form-Quiz
https://dribbble.com/shots/18078720-Responsive-onboarding-form
- [x] Realizar a conexão do front com a api com o back
- [x] Realizar a primeira cchamada na API get moduloID
- [x] Trazer as informações da api no form
- [ ] Enviar as informações do form para o back
- [x] Criar os enuns para armazenar os descritivos
- [x] Usar um select para as informaçoes
- [ ] Criar um overlay com o resumo das informações antes de enviar para o backend
- [x] Usar as imagens dos modulos que estão disponiveis o site da Treetech
- [ ] Preparar as informações nos moldes corretos antes de enviar para o back
    Nome da LIB E3: MDB_GMP_V12
  Tag de versão de firmware: v12[fw12]
  Tag de versão do mapa: v12-MDB



#### Configurações
- [x] Decidir como sera feito o importar .csv
- [ ] Implementar interação com o moduloPrincipalId

#### Integrar o Treetech Maps no Builder
- [ ] Limitar a criação de mnemônicos a 58 caracters utilizando abreviações

Prefixos fixos (substituir sempre):
- IndicacaoDe → IndDe
- ParametroDe → ParamDe

Abreviações padrão
Use sempre as mesmas para palavras recorrentes:

Temperatura         → Temp
Tendencia           → Tend
Referencia          → Ref
Alarme              → Alm
Autodiagnostico     → Autodiag
Corrente            → Corr
Tensao              → Tens
Frequencia          → Freq
Configuracao        → Config
Habilitacao         → Hab
Desabilitacao       → Desab
Limite              → Lim
Status              → Stat
Comunicacao         → Com
Valor               → Val
Maxima              → Max
Minima              → Min
Media               → Med
Sensor              → Sens

