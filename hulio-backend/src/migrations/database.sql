CREATE TABLE website (
		url varchar(100) PRIMARY KEY,
  	tx_hash varchar(256) NOT NULL,
  	verified boolean NOT NULL,
  	date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);