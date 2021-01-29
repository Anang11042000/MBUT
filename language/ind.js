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
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar *ベッMBUTベッ* |17*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*Woiy Bogeng!! Ngapain lu daftar lagi bodoh, kau udah ku simpan Lapett!!!*`
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
	return`*「 DATA KEHIDUPANMU 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : ojok sampek lali mergo nomer iki penting!! ilang tak sunat :v`
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

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
╭══─⊱ ❰ *ABOUT USER* ❱ ⊰─══
╠«» *Nama* : ${pushname}
╠«» *Nomer* : wa.me/${sender.split("@")[0]}
╠«» *Uang mu* : Rp${uangku}
╠«» *XP* : ${getLevelingXp(sender)}/${reqXp}
╠«» *Level* : ${getLevelingLevel(sender)}
╠«» *User register* : ${_registered.length}
╰═─⊱  ⸨ *ベッMBUTベッ* ⸩  ⊰─════╯

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
║     ➣ *UNTUK MEMASTIKAN BOT*
║                   *OFF ATAU ON*
║   
║     ➣ *KETIK ${prefix}BOT*
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
║    ➥ ${prefix}lava                 
║    ➥ ${prefix}vinta
║    ➥ ${prefix}blood
║    ➥ ${prefix}sticker
║    ➥ ${prefix}sumery
║    ➥ ${prefix}firework
║    ➥ ${prefix}summer
║    ➥ ${prefix}neontext
║    ➥ ${prefix}avengers
║    ➥ ${prefix}sandwrite
║    ➥ ${prefix}metaldark
║    ➥ ${prefix}dropwater
║    ➥ ${prefix}greenneon
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
║    ➥ ${prefix}rate
║    ➥ ${prefix}slap                                            
║    ➥ ${prefix}speed
║    ➥ ${prefix}mining                                             
║    ➥ ${prefix}tampar
║    ➥ ${prefix}apakah                                 
║    ➥ ${prefix}bisakah
║    ➥ ${prefix}kapankah                                            
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
║    ➥ ${prefix}calc
║    ➥ ${prefix}toxic                                
║    ➥ ${prefix}igstalk
║    ➥ ${prefix}brainly
║    ➥ ${prefix}quotes
║    ➥ ${prefix}pinterest
║    ➥ ${prefix}beritahoax
║    ➥ ${prefix}resepmakanan
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
║    ➥ ${prefix}buylimit
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
║    ➥ ${prefix}1cak
║    ➥ ${prefix}anjing
║    ➥ ${prefix}pokemon
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
║    ➥ ${prefix}add
║    ➥ ${prefix}kick
║    ➥ ${prefix}limit
║    ➥ ${prefix}level 
║    ➥ ${prefix}tagall
║    ➥ ${prefix}setpp
║    ➥ ${prefix}linkgc
║    ➥ ${prefix}hidetag
║    ➥ ${prefix}demote
║    ➥ ${prefix}setdesc
║    ➥ ${prefix}setname
║    ➥ ${prefix}promote
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
║    ➥ ${prefix}bc
║    ➥ ${prefix}bcgc
║    ➥ ${prefix}leave
║    ➥ ${prefix}block
║    ➥ ${prefix}clone
║    ➥ ${prefix}kickall
║    ➥ ${prefix}clearall
║    ➥ ${prefix}unblock
║    ➥ ${prefix}setreply
║    ➥ ${prefix}setprefix
║    ➥ ${prefix}setppbot
║    ➥ ${prefix}event [1/0]
║     
║       _-_-_-_-_-_-_-_-_-_-_-_     
╚══‎ ꧁ ⌞≋≋≋≋≋⌝ ꧂══╝

        ╔════════╗
        ║  *ベッMBUTベッ*  ║
        ╚════════╝
KALAU Mau gunain Jangan Di ewe Botnya ntar marah😱✨

▁▂▃▄▅▆▇█▓█▇▆▅▄▃▂▁      
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
Yahhaha Si Bogeng Naik level!?🤣 Pasti Ibunya bangga :(
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
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
	return`*┏⊱ *「 ATM 」* ━┓\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
