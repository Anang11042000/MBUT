exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 DAFTAR SEK DOS!! 」*\n\n*Cara Daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar *_ベッMBUTベッ_* |17*`
}

exports.rediregis = () => {
	return`*「 RA USAH DAFTAR MANEH 」*\n\n*Woiy Lapet!!! Ngapain lu daftar lagi bodoh, kau udah ku simpan Lapett!!! Lapett!!!👺👺*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA MENANTU 」*\n\nkamu sudah terdaftar di data Menantu\n\n*╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗*\n*║*\n*║*          〘 *DATAMU* 〙\n*║*\n*║*   ➥ *Nama* : ${namaUser}\n*║*   ➥ *Nomer* :\n*║*   wa.me/${sender.split("@")[0]}\n*║*   ➥ *Umur* : ${umurUser}\n*║*   ➥ *Waktu pendaftaran* : \n*║*        ${time}\n*║*\n*║*        _-_-_-_-_-_-_-_-_-_-_-_     \n*╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝*\n\n*╔══════SN══════╗*\n*║*   ${serialUser}      *║*\n*╚══════SN══════╝*\n\nNOTE : ojok sampek lali mergo nomer iki penting!! gak ileng tak sunat :v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
┏━━━«» *ABOUT USER* «»━━┓
╠«» *Nama* : ${pushname}
╠«» *Nomer* : wa.me/${sender.split("@")[0]}
╠«» *Uang mu* : Rp${uangku}
╠«» *XP* : ${getLevelingXp(sender)}/${reqXp}
╠«» *Level* : ${getLevelingLevel(sender)}
╠«» *User register* : ${_registered.length}
┗━━«» *ベッMBUTベッ* «»━━┛

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║       
║ ⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑⌑                                       
║          
║             〘 *NOTE* 〙 
║ 
║     ➣ *SPAM? : AUTO BLOCK!*
║     
║     ➣ *BERI JEDA 5 DETIK SAAT*
║           *MENGGUNAKANNYA!!*
║ 
║     ➣ *BUG/ERROR HARAP CHAT* 
║                        *OWNER!*
║
║     ➣ *HARAP SABAR DENGAN*
║                   *BUG²NYA!*
║ 
║  -_-_-_-_-_-_-_-_-_-_-_-_-_-_-     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
        
Woiy Bogeng!!! berikut adalah beberapa fitur yang ada pada bot yang bisa kamu gunakan, tapi ngotak bodoh!!!✨

▁▂▃▄▅▆▇█▓█▇▆▅▄▃▂▁

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║    〘 *MAKER MENU* 〙        
║                                                  
║    ➥ ${prefix}lava <teks>
║    ➥ ${prefix}blood <teks>
║    ➥ ${prefix}sticker
║    ➥ ${prefix}qrcode <teks>
║    ➥ ${prefix}sumery <teks>
║    ➥ ${prefix}firework <teks>
║    ➥ ${prefix}summer <teks>
║    ➥ ${prefix}neontext <teks>
║    ➥ ${prefix}avengers <teks|teks>
║    ➥ ${prefix}sandwrite <teks>
║    ➥ ${prefix}metaldark <teks>
║    ➥ ${prefix}dropwater <teks>
║    ➥ ${prefix}greenneon <teks>
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║       〘 *FUN MENU* 〙 
║                                                
║    ➥ ${prefix}rate <teks>
║    ➥ ${prefix}slap                                            
║    ➥ ${prefix}cium
║    ➥ ${prefix}toxic
║    ➥ ${prefix}peluk
║    ➥ ${prefix}nangis
║    ➥ ${prefix}mining 
║    ➥ ${prefix}tampar         
║    ➥ ${prefix}apakah <teks>
║    ➥ ${prefix}bisakah <teks>
║    ➥ ${prefix}kapankah <teks>
║    ➥ ${prefix}moddroid <namaAPK>
║    ➥ ${prefix}happymod <namaAPK>
║
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
       
╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║          
║         〘 *MUTUAL* 〙
║    
║    ➥ ${prefix}mutual
║    ➥ ${prefix}next    
║
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║     〘 *MEDIA MENU* 〙 
║
║    ➥ ${prefix}bitly                         
║    ➥ ${prefix}igstalk <username>
║    ➥ ${prefix}brainly [error]
║    ➥ ${prefix}pinterest
║    ➥ ${prefix}resepmakanan <teks>
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
        
╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║          
║      〘 *YT &SONGS* 〙
║  
║    ➥ ${prefix}ytmp3 <link>
║    ➥ ${prefix}ytmp4 <link>
║    ➥ ${prefix}joox <judul>
║
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
        
╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║     〘 *LIMIT MENU* 〙 
║                                                
║    ➥ ${prefix}limit
║    ➥ ${prefix}dompet
║    ➥ ${prefix}transfer <tag|jumlah>
║    ➥ ${prefix}buylimit <jumlah>
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║     〘 *NSFW MENU* 〙 
║                                                
║    ➥ ${prefix}ranime
║    ➥ ${prefix}husbu
║    ➥ ${prefix}anjing
║    ➥ ${prefix}blowjob
║    ➥ ${prefix}nekonime
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║     〘 *GROUP MENU* 〙 
║                                                
║    ➥ ${prefix}add <tag>
║    ➥ ${prefix}kick <tag>
║    ➥ ${prefix}level 
║    ➥ ${prefix}tagall
║    ➥ ${prefix}setpp
║    ➥ ${prefix}linkgc
║    ➥ ${prefix}hidetag
║    ➥ ${prefix}demote <tag>
║    ➥ ${prefix}setdesc <teks>
║    ➥ ${prefix}setname <teks>
║    ➥ ${prefix}promote <tag>
║    ➥ ${prefix}grouplist
║    ➥ ${prefix}listadmin
║    ➥ ${prefix}nsfw [1/0]
║    ➥ ${prefix}simih [1/0]
║    ➥ ${prefix}welcome [1/0]
║    ➥ ${prefix}group [buka/tutup]
║    ➥ ${prefix}leveling [enable/disable]
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝

╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║                                                
║    〘 *OWNER MENU* 〙 
║                                                
║    ➥ ${prefix}bc <teks>
║    ➥ ${prefix}bcgc <teks>
║    ➥ ${prefix}leave
║    ➥ ${prefix}block <tag>
║    ➥ ${prefix}clone <tag>
║    ➥ ${prefix}kickall <rawan ban>
║    ➥ ${prefix}clearall
║    ➥ ${prefix}unblock <tag>
║    ➥ ${prefix}setreply <teks>
║    ➥ ${prefix}setprefix <symboul>
║    ➥ ${prefix}setppbot
║    ➥ ${prefix}event [1/0]
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
        
╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗
║          
║         〘 *THANKS TO* 〙
║    
║    ➥ AFFIS JUNIANTO
║    ➥ FADHIL GRAPHY
║    ➥ MHANKBARBARS
║    ➥ MYBOT TEAM
║
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
        
KALAU Mau gunain, Jangan Di ewe Botnya ntar marah😱✨

▁▂▃▄▅▆▇█▓█▇▆▅▄▃▂▁
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role* :  ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
Yahhaha Si Bogeng Naik level!?🤣 Pasti Ibunya bangga :(
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*╔══‎ ꧁ ⌜≋≋≋≋≋⌟ ꧂══╗*\n*║*\n*║*             〘 *BANK* 〙\n*║*\n*║*   ➥ *nama* : ${pushname}\n*║*   ➥ *nomer* : ${sender.split("@")[0]}\n*║*   ➥ *uang* : ${uangku}\n*║*\n*║*        _-_-_-_-_-_-_-_-_-_-_-_\n*╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝*\n\n        *╔════════╗*\n        *║*  *ベッMBUTベッ*  *║*\n        *╚════════╝*`
}
