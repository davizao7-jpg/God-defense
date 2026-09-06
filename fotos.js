/* =====================================================================
   FOTOS.JS — Fotos dos personagens de God Defense
   =====================================================================
   Esse arquivo é OPCIONAL e INDEPENDENTE do jogo:
   - Se ele existir na mesma pasta do HTML, o jogo carrega ele e passa a
     mostrar a foto de cada carta (baú, coleção, deck, curinga, mão) no
     lugar do emoji, sempre que a chave abaixo tiver um valor preenchido.
   - Se ele não existir, for apagado, ou uma chave ficar vazia (""), o
     jogo simplesmente continua mostrando o emoji normalmente. Nada quebra.
   - Se uma foto cadastrada falhar ao carregar, o jogo também volta pro
     emoji sozinho, sem travar nada.

   MODO AUTOMÁTICO (o mais fácil — NÃO precisa editar este arquivo!):
   Se a chave abaixo ficar com "" (vazia), o jogo procura sozinho a foto
   dentro da pasta "fotos" (do lado do HTML), testando nesta ordem:
       fotos/<chave>.jpg
       fotos/<chave>.jpeg
       fotos/<chave>.png
       fotos/<chave>.webp
   Ou seja: crie uma pasta chamada "fotos" do lado do arquivo HTML e do
   fotos.js, e dentro dela salve a imagem com o NOME EXATO da chave da
   carta (veja a lista abaixo) e uma dessas extensões. Exemplo: para o
   Zeus, salve o arquivo como "zeus.jpg" (ou .jpeg/.png/.webp) dentro da
   pasta "fotos". Não precisa mexer em nada aqui embaixo nesse caso.

   MODO MANUAL (opcional, tem prioridade sobre o automático):
   Troque as aspas vazias "" pelo endereço da foto. Pode ser:
     1) Um link da internet:      zeus: "https://meusite.com/zeus.png",
     2) Um caminho de pasta local: zeus: "fotos/zeus.png",
     3) Uma imagem em base64:      zeus: "data:image/png;base64,AAAA...",
   Use o modo manual só se quiser um nome de arquivo diferente do nome
   da chave, ou uma foto vinda de um link/base64.

   NÃO mude os nomes das chaves (zeus, ares, etc.) — só preencha o valor
   se for usar o modo manual.
   ===================================================================== */
const FOTOS_CARTAS = {
  // ---------- Gregos ----------
  zeus: "",                 // Zeus (lendaria)
  ares: "",                 // Ares (epico)
  atena: "",                // Atena (comum)
  afrodite: "",             // Afrodite (raro)
  medusa: "",               // Medusa (raro)
  colosso: "",              // Colosso (raro)
  gaya: "",                 // Gaya (raro)
  titapedra: "",            // Titã de Pedra (raro)
  titafogo: "",             // Titã de Fogo (raro)
  titaeletrico: "",         // Titã Elétrico (raro)
  hades: "",                // Hades (lendaria)
  hermes: "",               // Hermes (epico)
  helio: "",                // Hélio (comum)
  hercules: "",             // Hércules (raro)
  poseidon: "",             // Poseidon (raro)

  // ---------- Construções ----------
  canhao: "",               // Canhão (comum)
  metralhadora: "",         // Metralhadora (comum)
  torrebombas: "",          // Torre de Bombas (comum)

  // ---------- Feitiços ----------
  chuva: "",                // Chuva de Flechas (comum)
  furacao: "",              // Furacão (raro)
  colera: "",               // Cólera (epico)
  gelo: "",                 // Gelo (comum)
  bolafogo: "",             // Bola de Fogo (comum)
  bombanuclear: "",         // Bomba Nuclear (raro)
  onda: "",                 // Onda (comum)

  // ---------- Demônios ----------
  hidrapequena: "",         // Hidra Pequena (comum)
  demoniogordo: "",         // Demônio Gordo (comum)
  demoniosgregos: "",       // Demônios Gregos (comum)
  demoniogigante: "",       // Demônio Gigante (epico)
  hidragigante: "",         // Hidra Gigante (epico)
  draugr: "",               // Draugr (comum)
  trollgelo: "",            // Troll de Gelo (raro)
  portaldemoniaco: "",      // Portal Demoníaco (raro)

  // ---------- Heróis ----------
  jack: "",                 // Jack (comum)
  pandora: "",              // Pandora (raro)
  breathgrego: "",          // Breath (epico)
  breathnordico: "",        // Breath (lendaria)
  atreuskid: "",            // Atreus Kid (raro)
  brok: "",                 // Brok (comum)
  penelope: "",             // Penélope (epico)
  luke: "",                 // Luke (epico)
  atreusurso: "",           // Atreus Urso (epico)
  freya: "",                // Freya (lendaria)
  scarking: "",             // Scar King (lendaria)
  wallenhaish: "",          // Breath wallenHaish (mitico)

  // ---------- Nórdicos ----------
  scar: "",                 // Scar (epico)
  abutre: "",               // Abutre (lendaria)
  ragmimody: "",            // Ragmi e Mody (raro)
  obione: "",               // Obione (epico)
  bruxa: "",                // Bruxa (comum)
  odin: "",                 // Odin (lendaria)
  portalragnarok: "",       // Portal Guerreiros do Ragnarok (raro)
  surt: "",                 // Surt (epico)
  valkirias: "",            // Irmãs Valquíria (raro)
  frey: "",                 // Frey (comum)
  baldur: "",               // Baldur (epico)
  jmungander: "",           // Jmungander (lendaria)
  hella: "",                // Hella (lendaria)
  guerreirosasgard: "",     // Guerreiros de Asgard (raro)
  thor: "",                 // Thor (lendaria)

  // ---------- Bíblicos ----------
  miguel: "",               // Miguel (raro)
  maria: "",                // Maria (raro)
  metraton: "",             // Metraton (lendaria)
  leaojuda: "",             // Leão da Tribo de Judá (epico)
  jesus: "",                // Jesus (mitico)

};
