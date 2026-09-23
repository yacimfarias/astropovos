export const menuContent = {
  oQueSao: {
    title: 'O que são asterismos?',
    paragraphs: [
      'Asterismos são agrupamentos ou desenhos aparentes formados por estrelas que, embora não correspondam às 88 constelações oficialmente reconhecidas pela União Astronômica Internacional, apresentam grande importância cultural. Entre diversos povos originários, essas formações celestes funcionam como referências para compreender o tempo, o espaço e os ciclos da natureza, expressando conhecimentos, histórias e tradições transmitidos entre gerações.',
      'A observação desses padrões no céu está relacionada à identificação das estações de seca e de chuva, aos períodos de plantio e colheita, aos ciclos de reprodução de animais e à realização de práticas e rituais. Dessa forma, os asterismos revelam maneiras próprias de interpretar o céu e de relacionar os fenômenos celestes à vida cotidiana e à organização cultural de diferentes povos.'
    ]
  },
  proposito: {
    title: 'Nosso propósito',
    paragraphs: [
      'Historicamente, o ensino e a divulgação da astronomia têm privilegiado referências de tradição europeia, deixando em segundo plano os conhecimentos e as práticas desenvolvidos por diferentes povos originários. Para muitas dessas sociedades, a observação do céu e dos fenômenos celestes está relacionada à organização do tempo, aos rituais, às atividades cotidianas e à construção de identidades e tradições culturais. Nesse contexto, os asterismos associados a diferentes povos indígenas permanecem pouco conhecidos e, muitas vezes, são interpretados apenas a partir das categorias da astronomia ocidental, como as constelações, o que contribui para a invisibilização de outras formas de compreender e representar o céu.',
      'Diante desse cenário, propomos a criação de um aplicativo destinado à divulgação de asterismos e conhecimentos astronômicos de diferentes povos originários do Brasil, valorizando a diversidade de perspectivas culturais sobre o céu e ampliando o acesso a saberes historicamente pouco abordados nos espaços de ensino. A proposta também se relaciona à Lei nº 11.645/2008, que tornou obrigatório o ensino de história e cultura afro-brasileira e indígena nos estabelecimentos de ensino fundamental e médio. Apesar desse avanço, os conhecimentos astronômicos desses povos ainda recebem pouca atenção nas práticas pedagógicas.',
      'Assim, o aplicativo pretende funcionar também como recurso educacional para escolas e instituições de ensino superior, contribuindo para a divulgação da história, da cultura e dos conhecimentos astronômicos dos povos originários e para a construção de uma abordagem mais plural da astronomia no ensino brasileiro.'
    ]
  },
  sobreNos: {
    title: 'Sobre nós',
    paragraphs: [
      'Os textos e a responsabilidade pelo projeto são de Yaci Farias. As alunas Sofia Bulhões, Rafaella Pimenta, Mabel Miguez e Jade Simas são colaboradoras do projeto e participaram de seu desenvolvimento no âmbito do Clube de Ciências do Colégio Liceu Salesiano do Salvador, nos Anos Finais do Ensino Fundamental.',
      'O desenvolvimento técnico do site e dos SVGs é realizado por Eric Brasil.',
      'O projeto surgiu a partir da identificação de um problema central: a pouca visibilidade dos asterismos associados aos povos originários e sua presença ainda limitada em materiais educativos e espaços de divulgação científica. A iniciativa busca ampliar o conhecimento sobre esses saberes, valorizar diferentes formas de observação e interpretação do céu e incentivar o estudo dos asterismos presentes nas culturas dos povos originários do Brasil.'
    ]
  }
} as const;

export type AsterismoContent = {
  lead: string;
  paragraphs: string[];
  sourceNote: string;
};

export const asterismoContent: Record<string, AsterismoContent> = {
  cervo: {
    lead: 'De acordo com Afonso (2009), a constelação do Cervo (Blastocerus Wagner, 1844) está associada, no Hemisfério Sul, ao período do equinócio de outono, quando sua configuração passa a ser plenamente observável no céu.',
    paragraphs: [
      'Entre os Guarani, seu aparecimento indica a transição entre o período mais quente e o mais frio, que se estende até a primavera e corresponde ao chamado “Tempo Velho”. Entre povos indígenas da região Norte, por sua vez, essa referência celeste está relacionada à mudança da estação seca para a chuvosa, especialmente na segunda quinzena de março.',
      'A configuração do Cervo reúne estrelas que, na tradição astronômica ocidental, pertencem a diferentes constelações, incluindo o Cruzeiro do Sul, a Falsa Cruz e partes de Carina, Vela e Centaurus.'
    ],
    sourceNote: 'AFONSO, Germano Bruno. Astronomia indígena. Reunião anual da SBPC, v. 61, p. 1-5, 2009.'
  },
  onca: {
    lead: 'Em diferentes tradições indígenas amazônicas, a figura celeste da Onça está relacionada às mudanças sazonais e, especialmente, ao ciclo das chuvas.',
    paragraphs: [
      'Entre os Ticuna, sua posição no céu funciona como referência para reconhecer o início e o término do período chuvoso (FAULHABER, 2004). Já entre os Tukano, a onça também aparece associada a fenômenos atmosféricos, como o trovão e o relâmpago, entendidos como forças ligadas à fertilidade e à renovação da natureza (SAUNDERS, 1998).',
      'Nessa tradição, a constelação conhecida como Yai (onça) é formada por diferentes partes que representam o corpo do animal e ocupa uma região do céu que, na astronomia ocidental, corresponde a áreas de Cassiopeia, Andrômeda e Perseu (FAULHABER, 2004).'
    ],
    sourceNote: 'FAULHABER, P. As estrelas eram terrenas: antropologia do clima, da iconografia e das constelações Ticuna. Revista de Antropologia, v. 47, n. 2, p. 379-426, 2004. SAUNDERS, N. (org.). Icons of power: feline symbolism in the Americas. London; New York: Routledge, 1998.'
  },
  'tapii-anta': {
    lead: 'A constelação da Anta, também conhecida como Tapi’i, ocupa uma extensa região da Via Láctea e está associada, em diferentes tradições indígenas, à leitura das mudanças sazonais.',
    paragraphs: [
      'Entre povos da região Norte do Brasil, sua aparição no céu, por volta da segunda quinzena de setembro, é relacionada à chegada da primavera e à transição entre o período seco e o chuvoso (AFONSO, 2013). Sua observação é mais favorável nas regiões setentrionais, enquanto, no Sul, ela permanece muito próxima ao horizonte.',
      'Por esse motivo, povos meridionais recorrem a outras referências celestes, como a constelação do Colibri, para identificar a passagem do frio para o calor e a chegada da primavera (AFONSO, 2013; LIMA; MOREIRA, 2005).'
    ],
    sourceNote: 'AFONSO, Germano Bruno. As constelações indígenas brasileiras. Telescópios na Escola, Rio de Janeiro, p. 1-11, 2013. LIMA, Flávia Pedroza; MOREIRA, I. C. Tradições astronômicas tupinambás na visão de Claude D’Abbeville. Revista da Sociedade Brasileira de História da Ciência, v. 3, n. 1, 2005.'
  },
  ema: {
    lead: 'A constelação da Ema ocupa uma região marcante da Via Láctea e, em tradições indígenas, está associada tanto a narrativas míticas quanto à observação das mudanças sazonais.',
    paragraphs: [
      'Entre povos Guarani, sua forma é relacionada à figura de uma ema que se aproxima de dois ovos, enquanto as áreas claras e escuras da Via Láctea ajudam a compor o desenho do animal.',
      'No Sul do Brasil, seu aparecimento completo no céu ao anoitecer, por volta da segunda quinzena de junho, é utilizado como referência para o início do inverno; entre povos do Norte, o mesmo fenômeno está associado ao começo da estação seca (AFONSO, 2013). Na astronomia ocidental, essa configuração ocupa uma região próxima às constelações de Cruzeiro do Sul e Escorpião.'
    ],
    sourceNote: 'AFONSO, Germano Bruno. As constelações indígenas brasileiras. Telescópios na Escola, Rio de Janeiro, p. 1-11, 2013.'
  },
  garca: {
    lead: 'A constelação da Garça possui importante significado cultural entre os Pamuri Mahsã.',
    paragraphs: [
      'Segundo Desano (2019), a garça é denominada Yhé, enquanto suas plumas, chamadas Uga, eram utilizadas como ornamentos em festividades realizadas nas aldeias.',
      'Nas narrativas indígenas, a Garça também aparece ligada a um episódio mítico em que a ave, considerada especialmente bela, é morta e posteriormente colocada no centro do céu como forma de preservação de sua memória. Além de seu significado simbólico, Yhé também funciona como referência para fenômenos ligados à vida cotidiana, sendo seu aparecimento relacionado a períodos de maior dificuldade para a obtenção de peixes.',
      'Sua posição no céu relaciona-se ainda a regiões que, na astronomia ocidental, correspondem às constelações de Virgem e Cabeleira de Berenice (CARDOSO, 2020; HUGH-JONES, 2017).'
    ],
    sourceNote: 'DESANO, Jaime Diakara. Wame: Gaapi, a bebida cósmica dos Desana. Mundo Amazónico, v. 10, n. 1, p. 13-37, 2019. CARDOSO, Walmir Thomazi. Constelações, enchentes, verões e invernos no Alto Rio Negro. Revista Cosmovisiones/Cosmovisões, v. 1, n. 1, p. 122-137, 2020. HUGH-JONES, Stephen. As Plêiades e Escorpião na Cosmologia Barasana. Revista Anthropológicas, ano 21, v. 28, p. 1, 2017.'
  },
  'cobra-jararaca': {
    lead: 'Entre os Tukano, a constelação da Cobra está relacionada ao período das chuvas e às cheias dos rios, época em que jararacas podem se aproximar das aldeias (AFONSO, 2009).',
    paragraphs: [
      'Sua figura ocupa uma região do céu que, na astronomia ocidental, corresponde principalmente à constelação de Escorpião, sendo a Estrela Antares associada à cabeça do animal.',
      'A representação indígena, entretanto, organiza esse conjunto de estrelas de maneira própria, identificando diferentes partes da cobra, como Aña duhpoa (cabeça), Aña nimaga (bolsa de veneno), Aña ohpu (corpo) e Aña pihkorõ (rabo), além de outras estruturas que completam a figura.'
    ],
    sourceNote: 'AFONSO, Germano Bruno. Astronomia indígena. Reunião anual da SBPC, v. 61, p. 1-5, 2009.'
  },
  'homem-velho': {
    lead: 'Em relação à constelação do Homem Velho, d’Abbeville relatou: “Tuivaé, Homem Velho, é como chamam outra constelação formada de muitas estrelas, semelhante a um homem velho pegando um bastão”.',
    paragraphs: [
      'Na segunda quinzena de dezembro, quando o Homem Velho (Tuya, em guarani) surge totalmente ao anoitecer, no lado Leste, indica o início do verão para os povos do Sul do Brasil e o início da estação chuvosa para os povos do Norte do Brasil.',
      'A constelação do Homem Velho é formada pelas constelações ocidentais Taurus e Orion. Ela contém três outras constelações indígenas, cujos nomes em guarani são Eixu (as Plêiades), Tapi’i rainhykã (as Híades, incluindo Aldebaran) e Joykexo (o Cinturão de Orion).',
      'A cabeça do Homem Velho é formada pelas estrelas do aglomerado estelar Híades, em cuja direção se encontra α Tauri (Aldebaran). Acima da cabeça fica o aglomerado das Plêiades, que representa um penacho. O Cinturão de Órion, formado por Mintaka, Alnilam e Alnitak, representa o joelho da perna sadia, enquanto Saiph representa o pé.'
    ],
    sourceNote: 'AFONSO, Germano Bruno. As constelações indígenas brasileiras. Telescópios na Escola, Rio de Janeiro, p. 1-11, 2013. LIMA, Flávia Pedroza; MOREIRA, I. C. Tradições astronômicas tupinambás na visão de Claude D’Abbeville. Revista da Sociedade Brasileira de História da Ciência, v. 3, n. 1, 2005.'
  },
  'vespeiro-colmeia': {
    lead: 'Entre povos Tupi-Guarani, o agrupamento estelar conhecido na astronomia ocidental como Plêiades recebe denominações próprias e está associado à observação dos ciclos naturais.',
    paragraphs: [
      'Em Guarani, aparece como Eixu, termo relacionado à ideia de colmeia ou ninho de abelhas, enquanto entre os Tupi é chamado Seichu, associado a “vespeiro”.',
      'Esse conjunto de estrelas está localizado na região da constelação de Touro e pode ser facilmente reconhecido a olho nu. Segundo Afonso (2013), seu aparecimento no céu era utilizado como referência para a chegada das chuvas e também para a marcação do início de um novo ciclo anual, funcionando como um importante indicador temporal para diferentes povos indígenas.'
    ],
    sourceNote: 'AFONSO, Germano Bruno. As constelações indígenas brasileiras. Telescópios na Escola, Rio de Janeiro, p. 1-11, 2013.'
  },
  'canoa-tembe': {
    lead: 'A Canoa Tembé é formada por cinco estrelas da Ursa Maior e funciona como referência de orientação pelo norte.',
    paragraphs: [
      'A descrição de Germano Afonso identifica Phecda, Megrez, Alioth, Mizar e Alkaid como as estrelas da Canoa. Quando a figura aparece paralela ao horizonte, Phecda indica o ponto cardeal norte no contexto descrito pela fonte.',
      'A mesma fonte registra uma extensão chamada Barco, com mastro e vela, mas esta carta mostra somente a Canoa Tembé. O Barco permanece como contexto documental, não como camada visual da ficha.'
    ],
    sourceNote: 'AFONSO, Germano Bruno. Etnoastronomia afro-indígena-brasileira: relato de pesquisa com os Tembé e pescadores de Vigia, Pará, 1999. Referência de trabalho arquivada no projeto.'
  }
};
