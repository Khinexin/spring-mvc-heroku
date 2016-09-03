/** @license
 * Copyright (c) 2013-2016 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(a){return function(){return a}},b=function(a,b){return a.src.indexOf(b)===a.src.length-b.length},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,d){for(var e,f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(e=b(f[g],a)){var h=f[g].getAttribute("data-main");if(void 0===h)throw"no data-main attribute found on "+d+" script tag";f[g].removeAttribute("data-main");var i=c(h);if("function"!=typeof i)throw"attribute on "+d+" does not reference a global method";return i}throw"cannot locate "+d+" script tag"},e=d("help_pt.js","help for language pt");e({about:a('\ufeff<div class="ephox-polish-help-article ephox-polish-help-about">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Sobre</div>\n  <p>O Textbox.io \xe9 uma ferramenta WYSIWYG para criar conte\xfados atraentes em aplicativos online. Ele permite que as pessoas se expressem na Web em redes sociais, blogs, e-mails e meios semelhantes. </p>\n  <p>&nbsp;</p>\n  <p>Textbox.io @@FULL_VERSION@@</p>\n  <p>Vers\xe3o do cliente @@CLIENT_VERSION@@</p>\n  <p class="ephox-polish-help-integration">Integra\xe7\xe3o para @@INTEGRATION_TYPE@@, vers\xe3o @@INTEGRATION_VERSION@@</p>\n  <p>&nbsp;</p>\n  <p>Copyright 2016 Ephox Corporation. Todos os direitos reservados.</p>\n  <p><a href="javascript:void(0)" class="ephox-license-link">Licen\xe7as de terceiros</a></p>\n</div>'),accessibility:a('\ufeff<div class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Navega\xe7\xe3o pelo teclado</div>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Ativando a navega\xe7\xe3o pelo teclado</div>\n  <p>Para ativar a navega\xe7\xe3o pelo teclado na barra de ferramentas, pressione F10 para Windows ou ALT + F10 no Mac OSX. O primeiro item na barra de ferramentas ser\xe1 destacado com um contorno azul, indicando que est\xe1 selecionado. </p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Movendo-se entre grupos</div>\n  <p>Os bot\xf5es na barra de ferramentas com fun\xe7\xf5es assemelhadas s\xe3o separados em grupos. Quando a navega\xe7\xe3o pelo teclado estiver ativa, pressione a tecla Tab para mover a sele\xe7\xe3o para o pr\xf3ximo grupo e Shift+Tab para mover a sele\xe7\xe3o para o grupo anterior. Ao pressionar Tab no \xfaltimo grupo, voc\xea retorna ao primeiro grupo de bot\xf5es.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Movendo-se entre itens ou bot\xf5es</div>\n  <p>Para voltar e avan\xe7ar entre os itens, use as teclas de seta. Os itens ser\xe3o selecionados em sequ\xeancia dentro do pr\xf3prio grupo. Para ir para o grupo seguinte, pressione Tab e use as teclas de seta.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Executando comandos</div>\n  <p>Para executar um comando, leve a sele\xe7\xe3o at\xe9 o bot\xe3o desejado e pressione espa\xe7o ou Enter.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Abrindo, navegando e fechando menus</div>\n  <p>Quando um bot\xe3o de barra de ferramentas contiver um menu, pressione a barra de espa\xe7o ou Enter para abrir o menu. Quando o menu abrir, o primeiro item estar\xe1 selecionado. Use as teclas de seta para navegar pelo menu. Para subir ou descer pelo menu, pressione as teclas de seta para cima e para baixo, respectivamente. Isso tamb\xe9m se aplica aos submenus.</p>\n\n  <p>Os itens de menu que possuem submenus s\xe3o identificados por um s\xedmbolo de divisa. Use a tecla de seta que corresponde \xe0 dire\xe7\xe3o da divisa para expandir o submenu, e a tecla de seta oposta para fech\xe1-lo.</p>\n\n  <p>Para fechar qualquer menu ativo, pressione a tecla Esc. Quando um menu \xe9 fechado, a sele\xe7\xe3o volta \xe0 posi\xe7\xe3o anterior.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Editando e removendo hiperlinks</div>\n\n  <p>Para editar ou remover um link, navegue at\xe9 o menu Inserir e selecione Inserir Link. O editor exibe a caixa de di\xe1logo de edi\xe7\xe3o de link. </p>\n\n  <p>Edite o link inserindo o novo url na caixa de entrada de atualiza\xe7\xe3o de link e pressionando Enter. Remova o link do documento selecionando o bot\xe3o de remover. Para sair da caixa de di\xe1logo sem fazer altera\xe7\xf5es, pressione Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Alterando o tamanho da fonte e da borda da tabela</div>\n\n  <p>Altere o tamanho da fonte navegando at\xe9 o menu de fontes e selecionando o tamanho. O editor exibe a caixa de di\xe1logo de tamanho no menu e define o foco nela.</p>\n\n  <p>Altere o tamanho da borda da tabela navegando at\xe9 o item relacionado da barra de ferramentas e selecionando o tamanho da borda. O editor exibe a caixa de di\xe1logo de tamanho no menu e define o foco nela. Nota: o item da barra de ferramentas para dimensionar a borda da tabela s\xf3 estar\xe1 dispon\xedvel quando o cursor estiver dentro de uma tabela.</p>\n\n  <p>Na caixa de di\xe1logo de tamanho, pressione a tecla Tab para mover a sele\xe7\xe3o para o controle seguinte. Pressione Shift+Tab para mover a sele\xe7\xe3o para o controle anterior.</p>\n\n  <p>Modifique o tamanho inserindo o novo valor na caixa de entrada de tamanho. Por exemplo, 14px ou 1em. Para enviar altera\xe7\xf5es, pressione Enter. Observe que, ao pressionar Enter, voc\xea fecha a caixa de di\xe1logo e volta o foco ao documento.</p>\n\n  <p>Altere o tamanho sem sair da caixa de di\xe1logo ativando os bot\xf5es de aumentar tamanho ou diminuir tamanho. A altera\xe7\xe3o de tamanho com os bot\xf5es de aumentar ou diminuir modificar\xe1 imediatamente o tamanho do elemento selecionado, enquanto o valor de unidade em uso \xe9 mantido. Saia da caixa de di\xe1logo pressionando Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Recortando uma imagem</div>\n\n  <p>Para acessar o recurso de recorte, selecione a imagem para a qual deseja mostrar as opera\xe7\xf5es dispon\xedveis na barra de ferramentas. Essas opera\xe7\xf5es tamb\xe9m est\xe3o dispon\xedveis no menu de contexto. Quando o recorte est\xe1 ativo, uma m\xe1scara de recorte \xe9 posicionada sobre a imagem e o canto superior esquerdo \xe9 selecionado.</p>\n\n  <p>Navegue usando a tecla Tab. Voc\xea pode selecionar cada um dos 4 cantos ou toda a caixa da m\xe1scara de recorte. Cada canto pode ser posicionado individualmente ou todos podem ser movidos simultaneamente movendo-se toda a caixa da m\xe1scara de recorte.</p>\n\n  <p>Para mover a sele\xe7\xe3o atrav\xe9s da imagem, utilize as teclas de seta. Cada pressionamento de tecla de seta move a sele\xe7\xe3o em 10 pixels. Para movimentos de 1 pixel, mantenha a tecla Shift pressionada ao pressionar uma seta.</p>\n\n  <p>Pressione Enter para aplicar o recorte \xe0 imagem.</p>\n\n  <p>Para cancelar a a\xe7\xe3o de recorte sem qualquer impacto sobre a imagem, pressione a tecla ESC.</p>\n\n  <table role="grid" aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n      <caption>Navega\xe7\xe3o com Teclado</caption>\n      <thead>\n        <tr role="row">\n          <th role="columnheader" scope="col">A\xe7\xe3o</th>\n          <th role="columnheader" scope="col">Windows</th>\n          <th role="columnheader" scope="col">Mac OS</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr role="row">\n        <td role="gridcell">Ativar a Barra de Ferramentas</td>\n        <td role="gridcell">F10</td>\n        <td role="gridcell">ALT + F10</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Bot\xe3o Selecionar Pr\xf3ximo Grupo/Grupo Anterior</td>\n        <td role="gridcell">\u2190 ou \u2192</td>\n        <td role="gridcell">\u2190 ou \u2192</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Mover para o Pr\xf3ximo Grupo</td>\n        <td role="gridcell">TAB</td>\n        <td role="gridcell">TAB</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Mover para o Grupo Anterior</td>\n        <td role="gridcell">SHIFT + TAB</td>\n        <td role="gridcell">SHIFT + TAB</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Executar Comando</td>\n        <td role="gridcell">BARRA DE ESPA\xc7OS ou ENTER</td>\n        <td role="gridcell">BARRA DE ESPA\xc7OS ou ENTER</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Abrir o menu principal</td>\n        <td role="gridcell">BARRA DE ESPA\xc7OS ou ENTER</td>\n        <td role="gridcell">BARRA DE ESPA\xc7OS ou ENTER</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Abrir/Expandir Submenu</td>\n        <td role="gridcell">BARRA DE ESPA\xc7OS ou ENTER ou \u2192</td>\n        <td role="gridcell">BARRA DE ESPA\xc7OS ou ENTER ou \u2192</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Selecionar Pr\xf3ximo Item de Menu/Item de Menu Anterior</td>\n        <td role="gridcell">\u2193 ou \u2191</td>\n        <td role="gridcell">\u2193 ou \u2191</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Fechar menu</td>\n        <td role="gridcell">ESC</td>\n        <td role="gridcell">ESC</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Fechar/Recolher Submenu</td>\n        <td role="gridcell">ESC ou \u2190</td>\n        <td role="gridcell">ESC ou \u2190</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Mover a Sele\xe7\xe3o de Recorte da Imagem</td>\n        <td role="gridcell">\u2190 ou \u2192 ou \u2193 ou \u2191</td>\n        <td role="gridcell">\u2190 ou \u2192 ou \u2193 ou \u2191</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Mover com Precis\xe3o a Sele\xe7\xe3o de Recorte da Imagem</td>\n        <td role="gridcell">Pressionar SHIFT ao mover</td>\n        <td role="gridcell">Pressionar SHIFT ao mover</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Aplicar Recorte</td>\n        <td role="gridcell">ENTER</td>\n        <td role="gridcell">ENTER</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Cancelar Recorte</td>\n        <td role="gridcell">ESC</td>\n        <td role="gridcell">ESC</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'),a11ycheck:a('\ufeff<div class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Verifica\xe7\xe3o de Acessibilidade</div>\n  <p>A ferramenta Verifica\xe7\xe3o de Acessibilidade (se ativada) identifica os problemas de acessibilidade a seguir em documentos HTML.</p>\n  <table role="grid" aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-a11ycheck-table">\n      <caption>Defini\xe7\xf5es do Problema</caption>\n      <thead>\n        <tr role="row">\n          <th role="columnheader" scope="col">Problema</th>\n          <th role="columnheader" scope="col">WCAG</th>\n          <th role="columnheader" scope="col">Descri\xe7\xe3o</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr role="row">\n        <td role="gridcell">As imagens devem ter uma descri\xe7\xe3o de texto alternativa</td>\n        <td role="gridcell">1.1.1</td>\n        <td role="gridcell">As imagens devem ter um valor de texto alternativo definido, para descrever o tema da imagem aos usu\xe1rios com defici\xeancia visual. </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">O texto alternativo n\xe3o deve ser igual ao nome do arquivo de imagem</td>\n        <td role="gridcell">1.1.1</td>\n        <td role="gridcell">Evite usar o nome do arquivo de imagem como valor de texto alternativo. Escolha um valor de texto alternativo que descreva o tema da imagem.</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">As tabelas devem ter legendas</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">As tabelas devem ter um breve texto descritivo que indica o conte\xfado da tabela.</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">As tabelas complexas devem ter resumos</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">Tabelas com estruturas complexas (c\xe9lulas com v\xe1rias linhas ou colunas) devem incluir um resumo que descreva a estrutura da tabela. </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">A legenda e o resumo da tabela n\xe3o podem ter o mesmo valor</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">A legenda deve descrever o conte\xfado da tabela, enquanto que o resumo deve descrever a estrutura de tabelas complexas. </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">As tabelas devem ter pelo menos uma c\xe9lula de cabe\xe7alho</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">As tabelas devem incluir cabe\xe7alhos de linha ou coluna apropriados que descrevam o conte\xfado da linha ou coluna.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Obtenha mais informa\xe7\xf5es sobre este t\xf3pico (webaim.org).</a> </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Os cabe\xe7alhos de tabela devem ser aplicados a uma linha ou coluna</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">Os cabe\xe7alhos de tabela devem ser associados \xe0 linha ou coluna que descrevem.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Obtenha mais informa\xe7\xf5es sobre este t\xf3pico (webaim.org).</a> </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Este par\xe1grafo parece ser um t\xedtulo. Se for um t\xedtulo, selecione um n\xedvel de t\xedtulo.</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">Use t\xedtulos para separar documentos em se\xe7\xf5es. Evite o uso de par\xe1grafos formatados no lugar de t\xedtulos.<br/><a href="http://webaim.org/techniques/semanticstructure/#correctly" target="_blank">Obtenha mais informa\xe7\xf5es sobre este t\xf3pico (webaim.org).</a> </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Os t\xedtulos devem ser aplicados sequencialmente. Por exemplo: o T\xedtulo 1 deve ser seguido do T\xedtulo 2, e n\xe3o do T\xedtulo 3.</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">Os t\xedtulos seguintes do documento devem aparecer hierarquicamente, em ordem crescente ou equivalente.<br/><a href="http://webaim.org/techniques/semanticstructure/#contentstructure" target="_blank">Obtenha mais informa\xe7\xf5es sobre este t\xf3pico (webaim.org).</a> </td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Use marcadores para listas</td>\n        <td role="gridcell">1.3.1</td>\n        <td role="gridcell">Verifique se as listas de itens usam a estrutura de listas HTML para representar listas (<code>&lt;ul&gt;</code> ou <code>&lt;ol&gt;</code> e <code>&lt;li&gt;</code>).</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">O texto deve ter uma rela\xe7\xe3o de contraste de 4,5:1</td>\n        <td role="gridcell">1.4.3</td>\n        <td role="gridcell">O texto e o fundo devem ter uma rela\xe7\xe3o de contraste que permita a leitura \xe0s pessoas com vis\xe3o reduzida.</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Os links adjacentes devem ser mesclados.</td>\n        <td role="gridcell">2.4.4</td>\n        <td role="gridcell">Os links adjacentes que apontam para o mesmo recurso devem ser mesclados em um \xfanico link.</td>\n      </tr>\n    </tbody>\n  </table>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Mais informa\xe7\xf5es</div>\n  <p>\n    <a href="http://webaim.org/intro/" target="_blank">Introdu\xe7\xe3o \xe0 acessibilidade para Web (webaim.org)</a> <br/>\n    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank">Introdu\xe7\xe3o ao WCAG 2.0 (w3.org)</a> <br/>\n    <a href="http://www.section508.gov/" target="_blank">Se\xe7\xe3o 508 da lei de reabilita\xe7\xe3o dos EUA - US Rehabilitation Act (section508.gov)</a>\n  </p>\n</div>'),markdown:a('\ufeff<div class="ephox-polish-help-article">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Formata\xe7\xe3o com Markdown</div>\n  <p>Markdown \xe9 uma sintaxe para a cria\xe7\xe3o de estruturas HTML e formata\xe7\xe3o sem a necessidade de usar atalhos de teclado ou menus de acesso. Para usar a formata\xe7\xe3o Markdown, insira a sintaxe desejada, seguida da tecla Enter ou Barra de Espa\xe7os.</p>\n  <table cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-markdown" role="grid" aria-readonly="true">\n      <caption>Sintaxe de Formata\xe7\xe3o de Teclado</caption>\n      <thead>\n        <tr role="row">\n          <th scope="col" role="columnheader">Sintaxe</th>\n          <th scope="col" role="columnheader">Resultado em HTML</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr role="row">\n        <td role="gridcell"><pre># Maior T\xedtulo</pre></td>\n        <td role="gridcell"><pre>&lt;h1&gt; Maior T\xedtulo&lt;/h1&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>## T\xedtulo Maior</pre></td>\n        <td role="gridcell"><pre>&lt;h2&gt;T\xedtulo Maior&lt;/h2&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>### T\xedtulo Grande</pre></td>\n        <td role="gridcell"><pre>&lt;h3&gt;T\xedtulo Grande&lt;/h3&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>####  T\xedtulo</pre></td>\n        <td role="gridcell"><pre>&lt;h4&gt;T\xedtulo&lt;/h4&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>##### T\xedtulo Pequeno</pre></td>\n        <td role="gridcell"><pre>&lt;h5&gt;T\xedtulo Pequeno&lt;/h5&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>###### Menor T\xedtulo</pre></td>\n        <td role="gridcell"><pre>&lt;h6&gt;Menor T\xedtulo&lt;/h6&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>* Lista n\xe3o ordenada</pre></td>\n        <td role="gridcell"><pre>&lt;ul&gt;&lt;li&gt;Lista N\xe3o Ordenada&lt;/li&gt;&lt;/ul&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>1. Lista ordenada</pre></td>\n        <td role="gridcell"><pre>&lt;ol&gt;&lt;li&gt;Lista ordenada&lt;/li&gt;&lt;/ol&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>*It\xe1lico*</pre></td>\n        <td role="gridcell"><pre>&lt;em&gt;It\xe1lico&lt;/em&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>**Negrito**</pre></td>\n        <td role="gridcell"><pre>&lt;strong&gt;Negrito&lt;/strong&gt;</pre></td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell"><pre>---</pre></td>\n        <td role="gridcell"><pre>&lt;hr/&gt;</pre></td>\n      </tr>\n    </tbody>\n  </table>\n</div>'),shortcuts:a('\ufeff<div class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Atalhos de Teclado</div>\n  <table role="grid" aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n    <caption>Comandos do Editor</caption>\n    <thead>\n      <tr role="row">\n        <th role="columnheader" scope="col">A\xe7\xe3o</th>\n        <th role="columnheader" scope="col">Windows</th>\n        <th role="columnheader" scope="col">Mac OS</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr role="row">\n        <td role="gridcell">Desfazer</td>\n        <td role="gridcell">CTRL + Z</td>\n        <td role="gridcell">\u2318Z</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Refazer</td>\n        <td role="gridcell">CTRL + Y</td>\n        <td role="gridcell">\u2318\u21e7Z</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Negrito</td>\n        <td role="gridcell">CTRL + B</td>\n        <td role="gridcell">\u2318B</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">It\xe1lico</td>\n        <td role="gridcell">CTRL + I</td>\n        <td role="gridcell">\u2318I</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Sublinhado</td>\n        <td role="gridcell">CTRL + U</td>\n        <td role="gridcell">\u2318U</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Recuo</td>\n        <td role="gridcell">CTRL + ]</td>\n        <td role="gridcell">\u2318]</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Diminuir Recuo</td>\n        <td role="gridcell">CTRL + [</td>\n        <td role="gridcell">\u2318[</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Adicionar Link</td>\n        <td role="gridcell">CTRL + K</td>\n        <td role="gridcell">\u2318K</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Localizar</td>\n        <td role="gridcell">CTRL + F</td>\n        <td role="gridcell">\u2318F</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Modo de Tela Inteira (Alternar)</td>\n        <td role="gridcell">CTRL + SHIFT + F</td>\n        <td role="gridcell">\u2318\u21e7F</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Caixa de Di\xe1logo de Ajuda (Abrir)</td>\n        <td role="gridcell">CTRL + SHIFT + H</td>\n        <td role="gridcell">\u2303\u2325H</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Menu de Contexto (Abrir)</td>\n        <td role="gridcell">SHIFT + F10</td>\n        <td role="gridcell">\u21e7F10\u200e\u200f</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Preenchimento Autom\xe1tico de C\xf3digo</td>\n        <td role="gridcell">CTRL + Barra de Espa\xe7os</td>\n        <td role="gridcell">\u2303Espa\xe7o</td>\n      </tr>\n      <tr role="row">\n        <td role="gridcell">Exibi\xe7\xe3o de C\xf3digo Acess\xedvel</td>\n        <td role="gridcell">CTRL + SHIFT + U</td>\n        <td role="gridcell">\u2318\u2325U</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="ephox-polish-help-note" role="note">*Nota: alguns recursos podem ter sido desabilitados pelo administrador.</div>\n</div>\n')})}();