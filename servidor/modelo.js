
function Sistema(){
    this.usuarios={}; // que tipo coleccion??? 
    //operaciones sobre la colección
    this.agregarUsuario=function(nick){
        let res={"nick":-1};
        if(!nick){
            return res;
        }
        if(!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
            res.nick = nick;
        }
        return res;
    }
    this.eliminarUsuario=function(nick){
        let res={eliminado:false};
        if(this.usuarios[nick]){
            delete this.usuarios[nick];
            res.eliminado=true;
        }
        return res;
    }
    this.obtenerUsuario=function(){
        let lista=[];
        for(usr in this.usarios)
        {
            lista.push(this.usuarios[usr]);
        }
        return lista;
    }
    this.usuarioActivo=function(nick){
        let res={activo:false};
        res.activo=this.usuarios[nick]!=undefined;
        return res;
    }
    this.numeroUsuarios=function(){
        return Object.keys(this.usuarios).length;
    }

}

function Usuario(nick){
    this.nick=nick;
}


module.exports.Sistema=Sistema