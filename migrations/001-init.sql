-- Up 

CREATE TABLE `Word` (id INTEGER PRIMARY KEY, jisho TEXT);
CREATE TABLE `Kanji` (id INTEGER PRIMARY KEY, kanji TEXT, wordId INTEGER, 
    CONSTRAINT kanji_word FOREIGN KEY (wordId)
        REFERENCES Word (id) 
);
CREATE TABLE `Hiragana` (id INTEGER PRIMARY KEY, hiragana TEXT, wordId INTEGER, 
    CONSTRAINT hiragana_word FOREIGN KEY (wordId)
        REFERENCES Word (id) 
);
CREATE TABLE `Katakana` (id INTEGER PRIMARY KEY, katakana TEXT, wordId INTEGER, 
    CONSTRAINT katakana_word FOREIGN KEY (wordId)
        REFERENCES Word (id) 
);
CREATE TABLE `Reading` (id INTEGER PRIMARY KEY, downstep INTEGER, audioFile TEXT, wordId INTEGER, 
    CONSTRAINT reading_word FOREIGN KEY (wordId)
        REFERENCES Word (id) 
);

-- Down
DROP TABLE IF EXISTS `Word`;
DROP TABLE IF EXISTS `Kanji`;
DROP TABLE IF EXISTS `Hiragana`;
DROP TABLE IF EXISTS `Katakana`;
DROP TABLE IF EXISTS `Reading`;