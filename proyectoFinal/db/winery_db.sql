CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
lastname VARCHAR(100) NOT NULL,
document INT NOT NULL,
username VARCHAR(100) NOT NULL,
birthday DATE NOT NULL,
email VARCHAR(150) NOT NULL,
password VARCHAR (255) NOT NULL
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
userId INT UNSIGNED NOT NULL,
wineName VARCHAR(100) NOT NULL,
wineType VARCHAR (100) NOT NULL,
wineDescription TEXT NOT NULL,
wineVariety VARCHAR(100),
wineYear SMALLINT NOT NULL,
wineImage VARCHAR(255) NOT NULL,

FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
productId INT UNSIGNED NOT NULL,
userId INT UNSIGNED NOT NULL,
textoComentario VARCHAR(255) NOT NULL,
createdAt DATE,

FOREIGN KEY (userId) REFERENCES users(id),
FOREIGN KEY (productId) REFERENCES products(id)
);

INSERT INTO users 
VALUES
(DEFAULT, "Rosario", "Gutiérrez", "39840222", "RoGutiérrez", "1994-04-12", "rogut@gmail.com", "RoLaMasCapa94"),
(DEFAULT, "Juan Pablo", "Lopez", "42351192", "JPLopez", "2001-05-06", "juanpl@gmail.com", "MeGustaElVinito"),
(DEFAULT, "Roxana", "Dismar", "26994599", "Roxanita123", "1980-07-10", "roxanadismar@gmail.com", "AmoAMisGatos"),
(DEFAULT, "Héctor", "Aguirre", "6439944", "Hector123", "1952-08-03", "hectoraguirre@yahoo.com", "misnietos123"),
(DEFAULT, "Nicolas", "Ruiz", "43992413" , "NicoRiver_PL" , "12-03-02", "nicoravioles@outlook.com.ar", "gallardoPasion"),
(DEFAULT, "Valeria", "Presas", "24202693", "valeritapresas", "1983-10-10", "presasvaleria@hotmail.com", "bocaelmasgrande");


INSERT INTO products
VALUES
(DEFAULT, 1, "Luigi Bosca", "Tinto", "Luigi Bosca Malbec es un tinto emblemático de la bodega, elaborado con uvas de viñedos propios situados en Luján de Cuyo y Valle de Uco, Mendoza. Tiene un color rojo violáceo profundo y brillante. Sus aromas son intensos y equilibrados, con notas de frutas rojas algo maduras y especias. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter atractivo. Su final es profundo y nítido, con el roble totalmente integrado, y posee un buen potencial de guarda. Es un vino insignia de su variedad.", "Malbec", 2021, "imagen"),
(DEFAULT, 2, "Rutini", "Tinto","Este tinto de color rojo violáceo muy profundo. Los intensos aromas frutados se presentan entremezclados con otros propios de la crianza en roble nuevo (vainilla, ahumados, tostados). En boca, su estructura concentrada deja la evocación de sus taninos suaves y sucrosos. Cosechado manualmente. Crianza en barril 12 meses. Tipo de roble 80% francés, nuevo; 20% americano, nuevo. Apto para guarda de unos 6 años. Decantar por espacio de una hora para su consumo. La temperatura adecuada para disfrutar este vino es entre 16º y 18º C. Este Malbec es ideal para combinarlo con carnes vacunas grilladas y horneadas, aves asadas, pastas con salsas cárnicas, pescados de río.", "Malbec", 2021, "imagen"),
(DEFAULT, 3, "Salentein", "Tinto", "Varietales provenientes de las fincas que se ubican entre los 1050 y 1700 metros, con suelos pedregosos, gran amplitud térmica, optima exposición solar y agua pura de deshielo de los Andes que nos dan las condiciones ideales para elaborar vinos que son la máxima expresión del Valle de Uco. Este es de color rojo violáceo profundo de gran intensidad. En la nariz se percibe toda la tipicidad que presenta este varietal en el Valle de Uco, donde se destacan las bayas negras maduras, arándonos y grosellas. Se hacen presentes las delicadas notas florales de violetas. En boca presenta una entrada sedosa y envolvente. Amplio e intenso. Destacamos su acidez fresca y equilibrada. Es un vino franco donde las notas frutales se combinan con las notas aportadas por el paso por madera, especialmente las notas a vainilla. De largo y persistente final.", "Malbec", 2014, "imagen"),
(DEFAULT, 4, "Bressia Monteagrelo", "Tinto", "Bressia Monteagrelo fusiona el alma de cada varietal, su íntima relación con el origen y su profundo arraigo con un terroir único en el mundo: agrelo. Estos vinos son quilibrados pero intensos y seductores, cada uno de ellos impacta por su personalidad y estilo varietal. Presenta un color rojo intenso con tonalidades púrpuras propias del varietal. Perfecto equilibrio entre fruta y madera, muy pimentoso y especiado. Muy buen cuerpo, carnoso, con final de boca balanceado. Sin aristas, maduro y armónico.", "Cabernet Sauvignon", 2009, "imagen"),
(DEFAULT, 2, "Bressia Monteagrelo", "Tinto", "Bressia Monteagrelo fusiona el alma de cada varietal, su íntima relación con el origen y su profundo arraigo con un terroir único en el mundo: agrelo. Estos vinos son quilibrados pero intensos y seductores, cada uno de ellos impacta por su personalidad y estilo varietal. Presenta un color rojo intenso con tonalidades púrpuras propias del varietal. Perfecto equilibrio entre fruta y madera, muy pimentoso y especiado. Muy buen cuerpo, carnoso, con final de boca balanceado. Sin aristas, maduro y armónico.", "Cabernet Sauvignon", 2009, "imagen"),
(DEFAULT, 3, "Bressia Sylvestra", "Blanco", "Color amarillo verdoso de buena intensidad y gran luminosidad Delicados aromas a durazno blanco, pomelo, ruda Muy fresco, frutal y cuerpo equilibrado. Muy armónico y de muy buena tipicidad varietal. Cosechado manualmente, tecnica de fermentación tradicional. No paso por barrica de roble.La temperatura adecuada para su degustacion es de 9º C. Es un vino apto para guarda de unos 2 años. Cuando el vino es joven, por su característica acidez, es perfecto para casi cualquier ensalada, o para platos con tomate, pimientos verdes,espárragos, o quesos como el feta o de cabra. También muy apropiado para el marisco o para pescados sabrosos. En general, el exceso de sal puede ser “apagado” por la acidez y la frescura de este vino. Para un aperitivo de anchoas en salazón y aceitunas, por ejemplo, un Torrontes puede ir a la perfección", "Torrontes", 2021, "imagen"),
(DEFAULT, 4, "Bressia del Alma", "Tinto", "Vista: Tonos rojos de muy buena intensidad y matiz. De aspecto elegante y buena concentración Nariz: Muy buena expresión del varietal Merlot manifestando notas de trufas, guindas y moras como así también pimentosas y herbales potenciados por la presencia del Cabernet Franc. Acertado equilibrio entre la madera y la fruta. Boca: Su ingreso en boca es dulce, voluminoso y estructurado, revelando aromas de boca que recuerdan lo percibido en nariz.Armonía: Buen balance tánico que se manifesta con mucha elegancia y firmeza.", "Merlot", 2012, "imagen"),
(DEFAULT, 6, "Este Rosado de la Bodega Cielo y Tierra está realizado en los Viñedos ubicados en Perdriel, Luján de Cuyo a 950 msnm. Color rojo cereza con intenso halo rubí. En nariz, toque de frutilla confitada, mermelada ciruelas y un persistente cherry. En boca tiene un gran equilibrio azucar-acidez, con cuerpo untuoso y voluminoso, con un fresco frutado.", "Canarí", 2021, "imagen");

INSERT INTO comments
VALUES
(DEFAULT, 1, 2, "Súper recomendado", "2021-04-12")
(DEFAULT, 4, 4, "Especial para acompañar un asado en familia. Recomiendo guardarlo a 15°", "2021-03-11")
(DEFAULT, 3, 3 , "¡Me encanta! Es de mis favoritos. Lo probé por primera vez en mi luna de miel <3", "2020-10-8")
(DEFAULT, 7, 6, "Prefiero vinos más suaves. Sin embargo, no me digusta. Saludos desde el norte del país.", "2021-06-07")
(DEFAULT, 1, 5, "¡A mis hermanos y a mí nos encanta! Nos acompaña en todas las fiestas y reuniones familiares.", "2021-08-10")