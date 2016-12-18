/** @license
 * Copyright (c) 2013-2016 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(a){return function(){return a}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d="data-main",e=a.getAttribute(d);if(e){a.removeAttribute(d);var f=c(e);if("function"==typeof f)return f;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}},e=function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"},f="2.1.0",g=e("help_da.js","help for language da");g({version:f,about:a('\ufeff<div role=presentation class="ephox-polish-help-article ephox-polish-help-about">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Om</div>\n  <p>Textbox.io er et WYSIWYG-v\xe6rkt\xf8j til at skabe indhold, der ser fantastisk ud i online apps. Uanset om det er i sociale f\xe6llesskaber, blogs, e-mails eller noget midt imellem, lader Textbox.io folk komme til orde p\xe5 nettet.</p>\n  <p>&nbsp;</p>\n  <p>Textbox.io @@FULL_VERSION@@</p>\n  <p>Klientversion @@CLIENT_VERSION@@</p>\n  <p class="ephox-polish-help-integration">Integration af @@INTEGRATION_TYPE@@, version @@INTEGRATION_VERSION@@</p>\n  <p>&nbsp;</p>\n  <p>Copyright 2016 Ephox Corporation. Alle rettigheder forbeholdes.</p>\n  <p><a href="javascript:void(0)" class="ephox-license-link">Tredjepartslicenser</a></p>\n</div>'),accessibility:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Navigation med tastatur</div>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Aktiverer navigation med tastatur</div>\n  <p>For at aktivere navigation p\xe5 v\xe6rkt\xf8jslinjen, skal du trykke p\xe5 F10 for Windows eller ALT + F10 p\xe5 Mac OSX. Det f\xf8rste element p\xe5 v\xe6rkt\xf8jslinjen vil blive fremh\xe6vet med en bl\xe5t omrids for at vise, at det er valgt. </p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Flytte mellem grupper</div>\n  <p>Knapperne p\xe5 v\xe6rkt\xf8jslinjen er adskilt af grupper med lignende handlinger. N\xe5r navigation med tastatur er aktiv, vil tryk p\xe5 Tab-tasten flytte valget til den n\xe6ste gruppe, mens Shift + Tab vil flytte valget tilbage til den forrige gruppe. Hvis der trykkes p\xe5 Tab p\xe5 den sidste gruppe, skifter der tilbage til den f\xf8rste gruppe knapper.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Flytter mellem elementer eller knapper</div>\n  <p>Brug piletasterne til at flytte frem og tilbage mellem elementer. Elementer vil skifte inde i deres grupper, tryk p\xe5 Tab-tasten for at springe til n\xe6ste gruppe og brug piletasterne til at bev\xe6ge dig gennem gruppen.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Udf\xf8rer kommandoer</div>\n  <p>Naviger valget til den \xf8nskede knap og tryk p\xe5 mellemrumstasten eller Enter for at udf\xf8re en kommando.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\xc5bning, navigering og lukning af menuer</div>\n  <p>N\xe5r en v\xe6rkt\xf8jslinjeknap indeholder en menu, \xe5bnes menuen ved at trykke p\xe5 mellemrumstasten eller Enter. N\xe5r menuen \xe5bner, vil det f\xf8rste element blive valgt; brug piletasterne til at navigere menuen. Tryk p\xe5 henholdsvis op- eller ned-piletasten for at flytte op eller ned i menuen, det samme g\xe6lder for undermenuerne.</p>\n\n  <p>Menuelementer der har undermenuer er markeret med et pile-symbol. Brug den piletast der svarer til pilens retning for at vise undermenuen. Piletasten i den modsatte retning vil lukke undermenuen.</p>\n\n  <p>Tryk p\xe5 Escape-tasten for at lukke enhver aktiv menu. N\xe5r en menu lukkes, vil valget blive tilbagestillet til det tidligere valg.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Redigere og slette hyperlinks</div>\n\n  <p>For at redigere eller slette et link, skal du navigere til Inds\xe6t-menuen og v\xe6lge Inds\xe6t link. Redigeringsprogrammet viser dialogen Rediger link. </p>\n\n  <p>Rediger linket ved at indtaste den nye url i indtastningsfeltet Opdater link og trykke p\xe5 Enter. Fjern linket fra dokumentet ved at v\xe6lge knappen Fjern. Tryk p\xe5 Esc for at lukke dialogen uden at foretage \xe6ndringer.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">\xc6ndring af skriftst\xf8rrelse og st\xf8rrelse af tabelkant</div>\n\n  <p>Skift skriftst\xf8rrelse ved at navigere til menuen skrifttype og v\xe6lge skriftst\xf8rrelse. Redigeringsprogrammet viser dialogen St\xf8rrelse i menuen og indstiller fokus til dialogen.</p>\n\n  <p>Skift kanttykkelse ved at navigere til v\xe6rkt\xf8jslinjeelementet Kanttykkelse for tabel og v\xe6lge Kanttykkelse for tabel. Redigeringsprogrammet viser dialogen St\xf8rrelse i menuen og indstiller fokus til dialogen. Note: Elementet Kanttykkelse for tabel i v\xe6rkt\xf8jslinjen er kun tilg\xe6ngeligt, n\xe5r mark\xf8ren er inde i en tabel.</p>\n\n  <p>Inde i dialogen st\xf8rrelse, skal man trykke p\xe5 Tab-tasten for at flytte valget til den n\xe6ste kontrol. Tryk p\xe5 Shift + Tab for at flytte valget til den forrige kontrol.</p>\n\n  <p>\xc6ndr st\xf8rrelsen ved at indtaste en ny st\xf8rrelse i indtastningsfeltet St\xf8rrelse. For eksempel, 14px eller 1em. Tryk p\xe5 Enter for at sende \xe6ndringerne. Bem\xe6rk at n\xe5r du trykker p\xe5 Enter, lukkes dialogen, og fokus vender tilbage til dokumentet.</p>\n\n  <p>\xc6ndr st\xf8rrelsen uden at lukke dialogen ved at aktive knapperne til at \xf8ge eller reducere st\xf8rrelse. Skift af st\xf8rrelse med knapperne til at \xf8ge og reducere st\xf8rrelse vil med det samme \xe6ndre det valgte elements st\xf8rrelse, samtidig med at det bibeholder den aktuelle enhedsv\xe6rdi. Luk st\xf8rrelsesdialogen ved at trykke p\xe5 Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Besk\xe6ring af et billede</div>\n\n  <p>For at \xe5bne besk\xe6r-funktionen skal man v\xe6lge et billede for at f\xe5 vist billedhandlingerne p\xe5 v\xe6rkt\xf8jslinjen. Disse handlinger er ogs\xe5 tilg\xe6ngelige i genvejsmenuen. N\xe5r besk\xe6ring er aktiveret, vil en besk\xe6ringsramme blive anbragt oven p\xe5 billedet, og det \xf8verste venstre hj\xf8rne vil blive valgt.</p>\n\n  <p>Navigering med tab-tasten. Hvert af de 4 hj\xf8rner kan v\xe6lges samt den samlede besk\xe6ringsramme. Hvert hj\xf8rne kan placeres individuelt, eller alle hj\xf8rner kan flyttes p\xe5 samme tid ved at flytte den samlede besk\xe6ringsramme.</p>\n\n  <p>Valget flyttes hen over billedet med piletasterne. Hvert tryk p\xe5 en piletast vil flytte 10 pixels, for mindre bev\xe6gelser skal man holde Shift nede, samtidig med at man trykker p\xe5 piletasten for at flytte en pixel.</p>\n\n  <p>Tryk p\xe5 Enter for at udf\xf8re besk\xe6ringen.</p>\n\n  <p>Tryk p\xe5 ESC-tasten for at annullere besk\xe6ringen uden at det p\xe5virker billedet.</p>\n\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n      <caption>Navigation med tastatur</caption>\n      <thead>\n        <tr>\n          <th scope="col">Handling</th>\n          <th scope="col">Windows</th>\n          <th scope="col">Mac OS</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Aktiver v\xe6rkt\xf8jslinje</td>\n        <td>F10</td>\n        <td>ALT + F10</td>\n      </tr>\n      <tr>\n        <td>Knappen v\xe6lg n\xe6ste/forrige gruppe</td>\n        <td>\u2190 eller \u2192</td>\n        <td>\u2190 eller \u2192</td>\n      </tr>\n      <tr>\n        <td>Flyt til n\xe6ste gruppe</td>\n        <td>TAB</td>\n        <td>TAB</td>\n      </tr>\n      <tr>\n        <td>Flyt til forrige gruppe</td>\n        <td>SHIFT + TAB</td>\n        <td>SHIFT + TAB</td>\n      </tr>\n      <tr>\n        <td>Udf\xf8r kommando</td>\n        <td>MELLEMRUM eller ENTER</td>\n        <td>MELLEMRUM eller ENTER</td>\n      </tr>\n      <tr>\n        <td>\xc5bn hovedmenu</td>\n        <td>MELLEMRUM eller ENTER</td>\n        <td>MELLEMRUM eller ENTER</td>\n      </tr>\n      <tr>\n        <td>\xc5bn/udvid undermenu</td>\n        <td>MELLEMRUM eller ENTER eller \u2192</td>\n        <td>MELLEMRUM eller ENTER eller \u2192</td>\n      </tr>\n      <tr>\n        <td>Punktet v\xe6lg n\xe6ste/forrige gruppe</td>\n        <td>\u2193 eller \u2191</td>\n        <td>\u2193 eller \u2191</td>\n      </tr>\n      <tr>\n        <td>Luk menu</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n      <tr>\n        <td>Luk/sammmenfold undermenu</td>\n        <td>ESC eller \u2190</td>\n        <td>ESC eller \u2190</td>\n      </tr>\n      <tr>\n        <td>Flyt billedbesk\xe6ringsvalget</td>\n        <td>\u2190 eller \u2192 eller \u2193 eller \u2191</td>\n        <td>\u2190 eller \u2192 eller \u2193 eller \u2191</td>\n      </tr>\n      <tr>\n        <td>Flyt billedbesk\xe6ringsvalget n\xf8jagtigt</td>\n        <td>Hold SHIFT mens der bev\xe6ges</td>\n        <td>Hold SHIFT mens der bev\xe6ges</td>\n      </tr>\n      <tr>\n        <td>Anvend besk\xe6ring</td>\n        <td>ENTER</td>\n        <td>ENTER</td>\n      </tr>\n      <tr>\n        <td>Annuller besk\xe6ring</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'),a11ycheck:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Kontrollerer hj\xe6lp til handicappede</div>\n  <p>V\xe6rkt\xf8jet til at kontrollere hj\xe6lp til handicappede (hvis det er aktiveret) kan identificere f\xf8lgende problemer vedr\xf8rende adgang for handicappede i HTML-dokumenter.</p>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-a11ycheck-table">\n      <caption>Problemdefinition</caption>\n      <thead>\n        <tr>\n          <th scope="col">Problem</th>\n          <th scope="col">WCAG</th>\n          <th scope="col">Beskrivelse</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Billeder skal have en alternativ tekstbeskrivelse</td>\n        <td>1.1.1</td>\n        <td>Billeder skal have et alternativ tekst-v\xe6rdis\xe6t, der beskriver billedets emne til brugere med synsproblemer. </td>\n      </tr>\n      <tr>\n        <td>Den alternative tekst m\xe5 ikke v\xe6re den samme som billedets filnavn</td>\n        <td>1.1.1</td>\n        <td>Undg\xe5 at bruge billedets filnavn i v\xe6rdien for den alternative tekst. V\xe6lg en v\xe6rdi for den alternative tekst-, der beskriver billedets emne.</td>\n      </tr>\n      <tr>\n        <td>Tabeller skal have billedtekster</td>\n        <td>1.3.1</td>\n        <td>Tabeller skal have en kort beskrivende tekst, der forklarer, hvad tabellen indeholder.</td>\n      </tr>\n      <tr>\n        <td>Komplekse tabeller skal have resum\xe9er</td>\n        <td>1.3.1</td>\n        <td>Tabeller med komplekse strukturer (celler der sp\xe6nder over flere r\xe6kker eller kolonner) skal inkludere et resum\xe9, der beskriver tabelstrukturen. </td>\n      </tr>\n      <tr>\n        <td>Tabellers billedtekst og resum\xe9 kan ikke have samme v\xe6rdi</td>\n        <td>1.3.1</td>\n        <td>Billedtekster til tabeller skal beskrive tabellens indhold, mens tabelresum\xe9et skal beskrive strukturen af komplekse tabeller. </td>\n      </tr>\n      <tr>\n        <td>Tabeller skal have mindst en overskriftscelle</td>\n        <td>1.3.1</td>\n        <td>Tabeller skal indeholde passende r\xe6kke- eller kolonneoverskrifter, der beskriver indholdet af r\xe6kken eller kolonnen.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Flere oplysninger om dette emne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Tabeloverskrifter skal anvendes p\xe5 en r\xe6kke eller en kolonne</td>\n        <td>1.3.1</td>\n        <td>Tabeloverskrifter skal v\xe6re knyttet til den r\xe6kke eller kolonne, de beskriver.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">Flere oplysninger om dette emne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Dette afsnit ligner en overskrift. Hvis det er en overskrift, s\xe5 v\xe6lg et overskriftsniveau.</td>\n        <td>1.3.1</td>\n        <td>Brug overskrifter til at opdele dokumenter i afsnit. Undg\xe5 at bruge formatterede afsnit i stedet for overskrifter.<br/><a href="http://webaim.org/techniques/semanticstructure/#correctly" target="_blank">Flere oplysninger om dette emne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Overskrifter skal anvendes i sekventiel r\xe6kkef\xf8lge. For eksempel: Overskrift 1 skal f\xf8lges af Overskrift 2, ikke Overskrift 3.</td>\n        <td>1.3.1</td>\n        <td>Dokumentoverskrifter der f\xf8lger efter hinanden skal vises hierarkisk, og fremst\xe5 i stigende eller tilsvarende r\xe6kkef\xf8lge.<br/><a href="http://webaim.org/techniques/semanticstructure/#contentstructure" target="_blank">Flere oplysninger om dette emne (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Brug listemarkering til lister</td>\n        <td>1.3.1</td>\n        <td>S\xf8rg for at punktlister bruger HTML-listestruktur til at repr\xe6sentere lister (<code>&lt;ul&gt;</code> eller <code>&lt;ol&gt;</code> &amp; <code>&lt;li&gt;</code>).</td>\n      </tr>\n      <tr>\n        <td>Tekst skal have et kontrastforhold p\xe5 4,5:1</td>\n        <td>1.4.3</td>\n        <td>Tekst og dens baggrund skal have et kontrastforhold der sikrer, at teksten kan l\xe6ses af personer med moderat nedsat syn.</td>\n      </tr>\n      <tr>\n        <td>Links ved siden af hinanden skal sl\xe5s sammen.</td>\n        <td>2.4.4</td>\n        <td>Hyperlinks der peger p\xe5 samme ressource, skal sl\xe5s sammen til et enkelt hyperlink</td>\n      </tr>\n    </tbody>\n  </table>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Yderligere oplysninger</div>\n  <p>\n    <a href="http://webaim.org/intro/" target="_blank">Introduktion til hj\xe6lp til webadgang for handicappede(webaim.org)</a> <br/>\n    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank">Introduktion til WCAG 2.0 (w3.org)</a> <br/>\n    <a href="http://www.section508.gov/" target="_blank">Afsnit 508 af US Rehabilitation Act (lov om hj\xe6lp til handicappede) (section508.gov)</a>\n  </p>\n</div>'),markdown:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Markdown-formatering</div>\n  <p>Markdown er en syntaks til at skabe HTML-strukturer og -formatering uden at skulle bruge tastaturgenveje eller g\xe5 ind i menuer. Hvis du vil bruge markdown-formatering, skal du indtaste den \xf8nskede syntaks efterfulgt af Enter eller mellemrumstasten.</p>\n  <table cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-markdown" aria-readonly="true">\n      <caption>Syntaks for tastaturformatering</caption>\n      <thead>\n        <tr>\n          <th scope="col">Syntaks</th>\n          <th scope="col">HTML-resultater</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td><pre># St\xf8rste overskrift</pre></td>\n        <td><pre>&lt;h1&gt; St\xf8rste overskrift&lt;/h1&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>## Stor overskrift</pre></td>\n        <td><pre>&lt;h2&gt;Stor overskrift&lt;/h2&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>### Stor overskrift</pre></td>\n        <td><pre>&lt;h3&gt;Stor overskrift&lt;/h3&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>####  Overskrift</pre></td>\n        <td><pre>&lt;h4&gt;Overskrift&lt;/h4&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>##### Lille overskrift</pre></td>\n        <td><pre>&lt;h5&gt;Lille overskrift&lt;/h5&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>###### Mindste overskrift</pre></td>\n        <td><pre>&lt;h6&gt;Mindste overskrift&lt;/h6&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>* Usorteret liste</pre></td>\n        <td><pre>&lt;ul&gt;&lt;li&gt;Usorteret liste&lt;/li&gt;&lt;/ul&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>1. Sorteret liste</pre></td>\n        <td><pre>&lt;ol&gt;&lt;li&gt;Sorteret liste&lt;/li&gt;&lt;/ol&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>*Kursiv*</pre></td>\n        <td><pre>&lt;em&gt;Kursiv&lt;/em&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>**Fed**</pre></td>\n        <td><pre>&lt;strong&gt;Fed&lt;/strong&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>---</pre></td>\n        <td><pre>&lt;hr/&gt;</pre></td>\n      </tr>\n    </tbody>\n  </table>\n</div>'),shortcuts:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Tastaturgenveje</div>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n    <caption>Kommandoer under editor</caption>\n    <thead>\n      <tr>\n        <th scope="col">Handling</th>\n        <th scope="col">Windows</th>\n        <th scope="col">Mac OS</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Fortryd</td>\n        <td>CTRL + Z</td>\n        <td>\u2318Z</td>\n      </tr>\n      <tr>\n        <td>Annuller Fortryd</td>\n        <td>CTRL + Y</td>\n        <td>\u2318\u21e7Z</td>\n      </tr>\n      <tr>\n        <td>Fed</td>\n        <td>CTRL + B</td>\n        <td>\u2318B</td>\n      </tr>\n      <tr>\n        <td>Kursiv</td>\n        <td>CTRL + I</td>\n        <td>\u2318I</td>\n      </tr>\n      <tr>\n        <td>Understregning</td>\n        <td>CTRL + U</td>\n        <td>\u2318U</td>\n      </tr>\n      <tr>\n        <td>Indrykning</td>\n        <td>CTRL + ]</td>\n        <td>\u2318]</td>\n      </tr>\n      <tr>\n        <td>Formindsk indrykning</td>\n        <td>CTRL + [</td>\n        <td>\u2318[</td>\n      </tr>\n      <tr>\n        <td>Tilf\xf8j link</td>\n        <td>CTRL + K</td>\n        <td>\u2318K</td>\n      </tr>\n      <tr>\n        <td>S\xf8g</td>\n        <td>CTRL + F</td>\n        <td>\u2318F</td>\n      </tr>\n      <tr>\n        <td>Fuldsk\xe6rmsvisning (skift)</td>\n        <td>CTRL + SHIFT + F</td>\n        <td>\u2318\u21e7F</td>\n      </tr>\n      <tr>\n        <td>Hj\xe6lpdialog (\xe5ben)</td>\n        <td>CTRL + SHIFT + H</td>\n        <td>\u2303\u2325H</td>\n      </tr>\n      <tr>\n        <td>Genvejsmenu (\xe5ben)</td>\n        <td>SHIFT + F10</td>\n        <td>\u21e7F10\u200e\u200f</td>\n      </tr>\n      <tr>\n        <td>Autofuldf\xf8relse af kode</td>\n        <td>CTRL + mellemrumstast</td>\n        <td>\u2303Mellemrum</td>\n      </tr>\n      <tr>\n        <td>Tilg\xe6ngelig kodevisning</td>\n        <td>CTRL + SHIFT + U</td>\n        <td>\u2318\u2325U</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="ephox-polish-help-note" role="note">*Bem\xe6rk: Visse funktioner kan v\xe6re sl\xe5et fra af din administrator.</div>\n</div>\n')})}();