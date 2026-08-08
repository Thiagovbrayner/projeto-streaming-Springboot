-- Categorias
INSERT IGNORE INTO categoria (id, nome) VALUES (1, 'Crime');
INSERT IGNORE INTO categoria (id, nome) VALUES (2, 'Ficção Científica');
INSERT IGNORE INTO categoria (id, nome) VALUES (3, 'Drama');
INSERT IGNORE INTO categoria (id, nome) VALUES (4, 'Mistério');
INSERT IGNORE INTO categoria (id, nome) VALUES (5, 'Suspense');
INSERT IGNORE INTO categoria (id, nome) VALUES (6, 'Terror');
INSERT IGNORE INTO categoria (id, nome) VALUES (7, 'Comédia');
INSERT IGNORE INTO categoria (id, nome) VALUES (8, 'Aventura');
INSERT IGNORE INTO categoria (id, nome) VALUES (9, 'Ação');
INSERT IGNORE INTO categoria (id, nome) VALUES (10, 'Fantasia');
INSERT IGNORE INTO categoria (id, nome) VALUES (11, 'Romance');
INSERT IGNORE INTO categoria (id, nome) VALUES (12, 'Animação');
INSERT IGNORE INTO categoria (id, nome) VALUES (13, 'Documentário');
INSERT IGNORE INTO categoria (id, nome) VALUES (14, 'Biografia');
INSERT IGNORE INTO categoria (id, nome) VALUES (15, 'Guerra');

-- Admin
INSERT IGNORE INTO admin (id, email, senha)
VALUES (1, 'admin@byteflix.com', '$2a$10$4xMen9pm/xCczUhs/sIsvuxdIHSDxX9sqzDb6a8LJZLZRvpoEBXBq');

-- Filmes
INSERT IGNORE INTO filme (id, titulo, descricao, diretor, url_imagem, categoria_id) VALUES
(1, 'Goodfellas', 'Os Bons Companheiros acompanha Henry Hill desde sua juventude no Brooklyn até sua ascensão e queda na máfia.', 'Scorsese', 'https://th.bing.com/th/id/OIP.9WCTKVpfFCIeUidSEf18TAHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 1),
(2, 'Interestelar', 'Cooper lidera uma missão espacial através de um buraco de minhoca em busca de um novo lar para a humanidade.', 'Christopher Nolan', 'https://media.themoviedb.org/t/p/w600_and_h900_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg', 2),
(4, 'Shutter Island', 'Teddy Daniels investiga o desaparecimento de uma paciente em um hospital psiquiátrico isolado.', 'Scorsese', 'https://media.themoviedb.org/t/p/w600_and_h900_face/erl801HYIodoIBGZeFk0GTwCUBh.jpg', 4),
(5, 'The Irishman', 'Frank Sheeran se envolve profundamente com a máfia americana ao longo de décadas.', 'Scorsese', 'https://th.bing.com/th/id/OIP.3pRnFEUVMlGL5FDMiIkk_QHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 1),
(6, 'The Wolf of Wallstreet', 'A ascensão e queda do corretor Jordan Belfort em Wall Street.', 'Scorsese', 'https://media.themoviedb.org/t/p/w600_and_h900_face/sIy0jXDkaMf3SDZGaWcmkC2IOl.jpg', 7),
(7, 'Raging Bull', 'A trajetória do boxeador Jake LaMotta e seus conflitos dentro e fora dos ringues.', 'Scorsese', 'https://th.bing.com/th/id/OIP.PLzClhGIlRvhoij5529W-gHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 3),
(8, 'Fight Club', 'Um homem comum cria um clube de luta clandestino que se transforma em algo muito maior.', 'David Fincher', 'https://th.bing.com/th/id/OIP.VCFv9kYkADnQN4ms2c0dxgHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 3),
(9, 'The Godfather', 'A história da poderosa família mafiosa Corleone e a ascensão de Michael Corleone.', 'Coppola', 'https://th.bing.com/th/id/OIP.cxa0kYJ_qucjCQNBb0lKigHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 1),
(11, 'The Godfather Part II', 'A juventude de Vito Corleone e a consolidação do poder de Michael.', 'Coppola', 'https://th.bing.com/th/id/OIP.ux3uXgsliJokECEcHVAQrgHaKj?w=208&h=297&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 1),
(12, 'The Godfather Part III', 'Michael Corleone tenta legitimar os negócios da família e buscar redenção.', 'Coppola', 'https://media.themoviedb.org/t/p/w600_and_h900_face/y8GROCjgD8amoFufSx2USKrOy7d.jpg', 1),
(13, 'Shawshank Redemption', 'A amizade e esperança de dois homens dentro de uma prisão.', 'Frank Darabont', 'https://media.themoviedb.org/t/p/w600_and_h900_face/umX3lBhHoTV7Lsci140Yr8VpXyN.jpg', 3),
(14, 'Taxi Driver', 'Travis Bickle percorre as noites de Nova York enquanto mergulha em sua própria obsessão.', 'Scorsese', 'https://th.bing.com/th/id/OIP.4N9EMatlwSAvZUcwnVDrQwHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 3);
