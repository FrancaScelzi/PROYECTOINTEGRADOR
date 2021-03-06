
CREATE SCHEMA winery_db;
USE winery_db;
CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) ,
lastname VARCHAR(100) ,
document INT ,
username VARCHAR(100) ,
birthday DATE ,
email VARCHAR(150) ,
password VARCHAR (255) ,
img VARCHAR(255) ,
created_at DATE,
updated_at DATE
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED ,
wine_name VARCHAR(100) ,
wine_type VARCHAR (100) ,
wine_description TEXT ,
wine_variety VARCHAR(100),
wine_year SMALLINT ,
wine_image VARCHAR(255) ,
wine_comments INT,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
product_id INT UNSIGNED ,
user_id INT UNSIGNED ,
texto_comentario VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);


INSERT INTO users 
VALUES
(DEFAULT, "Rosario", "Gutiérrez", "39840222", "RoGutiérrez", "1994-04-12", "rosariogut@gmail.com", "$2a$10$sNYsvrzqbKNETXmsmVp9LuPSi6fqzqjCyBOutHcWdZoX9CVb4lY3u", "rosario.jpg", DEFAULT, DEFAULT),
(DEFAULT, "Juan Pablo", "Lopez", "42351192", "JPLopez", "2001-05-06", "jplopez@gmail.com", "$2a$10$sNYsvrzqbKNETXmsmVp9LuPSi6fqzqjCyBOutHcWdZoX9CVb4lY3u", "juanpablo.jpg", DEFAULT, DEFAULT),
(DEFAULT, "Roxana", "Dismar", "26994599", "Roxanita123", "1980-07-10", "roxanadismar@gmail.com", "$2a$10$sNYsvrzqbKNETXmsmVp9LuPSi6fqzqjCyBOutHcWdZoX9CVb4lY3u", "roxana.jpg", DEFAULT, DEFAULT),
(DEFAULT, "Héctor", "Aguirre", "6439944", "Hector123", "1952-08-03", "hectoraguirre@gmail.com", "$2a$10$sNYsvrzqbKNETXmsmVp9LuPSi6fqzqjCyBOutHcWdZoX9CVb4lY3u", "hector.jpg", DEFAULT, DEFAULT),
(DEFAULT, "Nicolas", "Ruiz", "43992413" , "NicoRiver_PL" , "12-03-02", "nicolasruiz@gmail.com.ar", "$2a$10$sNYsvrzqbKNETXmsmVp9LuPSi6fqzqjCyBOutHcWdZoX9CVb4lY3u","nicolas.jpg", DEFAULT, DEFAULT ),
(DEFAULT, "Valeria", "Presas", "24202693", "valeritapresas", "1983-10-10", "valeriapresas@gmail.com", "$2a$10$sNYsvrzqbKNETXmsmVp9LuPSi6fqzqjCyBOutHcWdZoX9CVb4lY3u","valeria.jpg", DEFAULT, DEFAULT),
(DEFAULT, "admin", "admin", "43992412", "admin", "2002-05-03", "admin@gmail.com", "$2a$10$XAyVJO8j5Gac0KtWun6zXOcvh8/7GFj8rFJGYrGR2DCfLFk8GFeb.","userImage-1623073213136.jpg", DEFAULT, DEFAULT);


INSERT INTO products
VALUES
(DEFAULT, 1, "Luigi Bosca", "Tinto", "Luigi Bosca Malbec es un tinto emblemático de la bodega, elaborado con uvas de viñedos propios situados en Luján de Cuyo y Valle de Uco, Mendoza. Tiene un color rojo violáceo profundo y brillante. Sus aromas son intensos y equilibrados, con notas de frutas rojas algo maduras y especias. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter atractivo. Su final es profundo y nítido, con el roble totalmente integrado, y posee un buen potencial de guarda. Es un vino insignia de su variedad.", "Malbec", 2021, "img-luigi-bosca-malbec.jpg",2, DEFAULT, DEFAULT),
(DEFAULT, 2, "Rutini", "Tinto","Este tinto de color rojo violáceo muy profundo. Los intensos aromas frutados se presentan entremezclados con otros propios de la crianza en roble nuevo (vainilla, ahumados, tostados). En boca, su estructura concentrada deja la evocación de sus taninos suaves y sucrosos. Cosechado manualmente. Crianza en barril 12 meses. Tipo de roble 80% francés, nuevo; 20% americano, nuevo. Apto para guarda de unos 6 años. Decantar por espacio de una hora para su consumo. La temperatura adecuada para disfrutar este vino es entre 16º y 18º C. Este Malbec es ideal para combinarlo con carnes vacunas grilladas y horneadas, aves asadas, pastas con salsas cárnicas, pescados de río.", "Malbec", 2021, "img-rutini-colección-malbec.jpg",0, DEFAULT, DEFAULT),
(DEFAULT, 3,  "Bressia Monteagrelo", "Tinto", "Bressia Monteagrelo fusiona el alma de cada varietal, su íntima relación con el origen y su profundo arraigo con un terroir único en el mundo: agrelo. Estos vinos son quilibrados pero intensos y seductores, cada uno de ellos impacta por su personalidad y estilo varietal. Presenta un color rojo intenso con tonalidades púrpuras propias del varietal. Perfecto equilibrio entre fruta y madera, muy pimentoso y especiado. Muy buen cuerpo, carnoso, con final de boca balanceado. Sin aristas, maduro y armónico.", "Cabernet Sauvignon", 2009, "img-bressia-monteagrelo-cabernet-sauvignon.jpg",1, DEFAULT, DEFAULT),
(DEFAULT, 3, "Bressia Sylvestra", "Blanco", "Color amarillo verdoso de buena intensidad y gran luminosidad Delicados aromas a durazno blanco, pomelo, ruda Muy fresco, frutal y cuerpo equilibrado. Muy armónico y de muy buena tipicidad varietal. Cosechado manualmente, tecnica de fermentación tradicional. No paso por barrica de roble.La temperatura adecuada para su degustacion es de 9º C. Es un vino apto para guarda de unos 2 años. Cuando el vino es joven, por su característica acidez, es perfecto para casi cualquier ensalada, o para platos con tomate, pimientos verdes,espárragos, o quesos como el feta o de cabra. También muy apropiado para el marisco o para pescados sabrosos. En general, el exceso de sal puede ser “apagado” por la acidez y la frescura de este vino. Para un aperitivo de anchoas en salazón y aceitunas, por ejemplo, un Torrontes puede ir a la perfección", "Torrontes", 2021, "img-bressia-sylvestra-torrontes.jpg",1, DEFAULT, DEFAULT),
(DEFAULT, 4, "Bressia del Alma", "Tinto", "Vista: Tonos rojos de muy buena intensidad y matiz. De aspecto elegante y buena concentración Nariz: Muy buena expresión del varietal Merlot manifestando notas de trufas, guindas y moras como así también pimentosas y herbales potenciados por la presencia del Cabernet Franc. Acertado equilibrio entre la madera y la fruta. Boca: Su ingreso en boca es dulce, voluminoso y estructurado, revelando aromas de boca que recuerdan lo percibido en nariz.Armonía: Buen balance tánico que se manifesta con mucha elegancia y firmeza.", "Merlot", 2012, "img-bressia-del-alma-merlot.jpg",0, DEFAULT, DEFAULT),
(DEFAULT, 6,  "Angelica Zapata A.", "Tinto","Esta es la primer cosecha de Catena Alta Malbec elaborada mediante el corte de microclimas: Las uvas de este vino, 100% Malbec, provienen de dos viñedos diferentes: el Lote 18 del Viñedo Angélica, de 70 años de edad, con suelo areno/arcilloso, y el Lote 3 del Viñedo Nicasia, de suelo arenoso. En ambos viñedos, la cosecha 2001 se caracterizó por temperaturas promedio levemente más cálidas durante el mes de marzo, con noches muy frescas, y con una amplitud térmica promedio más marcada de lo habitual. En el Viñedo Angélica, esto devino en fruta con intensos sabores de frutos negros y un paladar estructurado, pero suave a la vez, con taninos maduros y dulces. El Malbec del Viñedo Nicasia otorgó delicadas notas florales y dejos especiados de pimienta en el final de boca. Esta cosecha puede beberse y disfrutarse dentro de los próximos 4 a 5 años, continuando su evolución durante 10 años más.", "Malbec", 2001, "img-angelica-zapata-malbec.jpg",0, DEFAULT, DEFAULT),
(DEFAULT, 4, "Callejón de las Brujas", "Rosado","Este Rosado de la Bodega Cielo y Tierra está realizado en los Viñedos ubicados en Perdriel, Luján de Cuyo a 950 msnm. Color rojo cereza con intenso halo rubí. En nariz, toque de frutilla confitada, mermelada ciruelas y un persistente cherry. En boca tiene un gran equilibrio azucar-acidez, con cuerpo untuoso y voluminoso, con un fresco frutado.", "Canarí", 2021, "img-callejon-de-las-brujas-canari.jpg",1, DEFAULT, DEFAULT);

INSERT INTO comments
VALUES
(DEFAULT, 1, 2, "Súper recomendado", DEFAULT, DEFAULT ),
(DEFAULT, 4, 4, "Especial para acompañar un asado en familia. Recomiendo guardarlo a 15°", DEFAULT, DEFAULT),
(DEFAULT, 3, 3 , "¡Me encanta! Es de mis favoritos. Lo probé por primera vez en mi luna de miel <3", DEFAULT, DEFAULT ),
(DEFAULT, 7, 6, "Prefiero vinos más suaves. Sin embargo, no me digusta. Saludos desde el norte del país.", DEFAULT, DEFAULT),
(DEFAULT, 1, 5, "¡A mis hermanos y a mí nos encanta! Nos acompaña en todas las fiestas y reuniones familiares.", DEFAULT, DEFAULT);