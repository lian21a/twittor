function actualizaCacheDinamico(dynamicCache,req,res){
    //si encontro el recurso
    if(res.ok){
        //si encontro abre el enlace dynamicCache
        return caches.open(dynamicCache).then(cache=>{
            //Manda a la cache lo solicitado y lo respondido
            cache.put(req,res.clone());
            //y retorna la respuesta y la clona
            return res.clone();
        })
    }else{
        //si no lo encontró retorna la respuesta
        return res;
    }
}