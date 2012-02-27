Fixtures = {}
	

// very basic xml made up on the spot
Fixtures.xmlString1  = ""
Fixtures.xmlString1 += "<note>"
Fixtures.xmlString1 += "<to id='foo'>Tove</to>"
Fixtures.xmlString1 += "<from thing='baz'>Jani</from>"
Fixtures.xmlString1 += "<heading>Reminder</heading>"
Fixtures.xmlString1 += "<body>Foo bar monkey</body>"
Fixtures.xmlString1 += "<arr>"
Fixtures.xmlString1 += "<thing attr='banana'>stuff</thing>"
Fixtures.xmlString1 += "<thing attr='banana'>thats</thing>"
Fixtures.xmlString1 += "<thing attr='banana'>cool</thing>"
Fixtures.xmlString1 += "</arr>"
Fixtures.xmlString1 += "</note>"

// Sample of an epub package document (contains comments and namespaces)
Fixtures.xmlString2  = ""
Fixtures.xmlString2 += '<?xml version="1.0" encoding="UTF-8"?>'
Fixtures.xmlString2 += '<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="ean" version="2.0">'
Fixtures.xmlString2 += '<metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.idpf.org/2007/opf">'
Fixtures.xmlString2 += '<dc:title>Lespagnol dans votre poche</dc:title>'
Fixtures.xmlString2 += '<dc:creator></dc:creator>'
Fixtures.xmlString2 += '<dc:publisher>Larousse</dc:publisher>'
Fixtures.xmlString2 += '<dc:description>Un précis indispensable, dans un petit format, pour apprendre ou réviser les mots et expressions indispensables de tous les jours2 000 motsde très nombreux exemples, pour employer le mot juste des encadrés sur les expressions indispensables à connaître15 thèmes de la vie courante : le shopping, les voyages, le sport, l’informatique, etc.des photographies illustrant certains motsdes astuces pour déjouer les pièges classiques ou comprendre certaines difficultés grammaticalesun mini dictionnaire du vocabulaire de base, classé par ordre alphabétique, pour une consultation rapide</dc:description>'
Fixtures.xmlString2 += '<dc:rights>© Éditions Larousse, </dc:rights>'
Fixtures.xmlString2 += '<dc:identifier id="ean">9782035862464</dc:identifier>'
Fixtures.xmlString2 += '<dc:language>fr</dc:language>'
Fixtures.xmlString2 += '</metadata>'
Fixtures.xmlString2 += '<manifest>'
Fixtures.xmlString2 += '<item id="css" href="styles.css" media-type="text/css" />'
Fixtures.xmlString2 += '<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml" />'
Fixtures.xmlString2 += '<item id="cover" href="images/cover.jpg" media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<!-- texte-manifest -->'
Fixtures.xmlString2 += '<item id="font2" href="Fonts/HighlanderStd-Medium.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font3" href="Fonts/HighlanderStd-BookItalic.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font4" href="Fonts/HighlanderStd-MediumItalic.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font5" href="Fonts/HighlanderStd-Book.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font6" href="Fonts/ZapfDingbatsStd.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font7" href="Fonts/MyriadPro-Light.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font8" href="Fonts/EuropeanPiStd-1.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font9" href="Fonts/NeutraText-Demi.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font10" href="Fonts/Bradley_Hand_ITC_Bold.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font11" href="Fonts/NeutraText-Book.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font12" href="Fonts/NeutraText-DemiItalic.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font13" href="Fonts/NeutraDisplay-Medium.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font14" href="Fonts/MyriadPro-Semibold.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font15" href="Fonts/MyriadPro-It.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font16" href="Fonts/MyriadPro-Regular.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="font17" href="Fonts/MyriadPro-Bold.otf" media-type="application/x-font-otf"/>'
Fixtures.xmlString2 += '<item id="Page_1"  href="Page_1.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_1_jpg" href="images/Page_1.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<item id="Page_2"  href="Page_2.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_2_jpg" href="images/Page_2.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<item id="Page_3"  href="Page_3.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_3_jpg" href="images/Page_3.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<item id="Page_4"  href="Page_4.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_4_jpg" href="images/Page_4.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<item id="Page_5"  href="Page_5.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_5_jpg" href="images/Page_5.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<item id="Page_6"  href="Page_6.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_6_jpg" href="images/Page_6.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<item id="Page_7"  href="Page_7.html"  media-type="application/xhtml+xml"/>'
Fixtures.xmlString2 += '<item id="Page_7_jpg" href="images/Page_7.jpg"  media-type="image/jpeg"/>'
Fixtures.xmlString2 += '<!-- /texte-manifest -->'
Fixtures.xmlString2 += '</manifest>'
Fixtures.xmlString2 += '<spine toc="ncx">'
Fixtures.xmlString2 += '<!-- texte-spine -->'
Fixtures.xmlString2 += '<itemref idref="Page_1"/>'
Fixtures.xmlString2 += '<itemref idref="Page_2"/>'
Fixtures.xmlString2 += '<itemref idref="Page_3"/>'
Fixtures.xmlString2 += '<itemref idref="Page_4"/>'
Fixtures.xmlString2 += '<itemref idref="Page_5"/>'
Fixtures.xmlString2 += '<itemref idref="Page_6"/>'
Fixtures.xmlString2 += '<itemref idref="Page_7"/>'
Fixtures.xmlString2 += '<!-- /texte-spine -->'
Fixtures.xmlString2 += '</spine>'
Fixtures.xmlString2 += '<guide>'
Fixtures.xmlString2 += '</guide>'
Fixtures.xmlString2 += '</package>'