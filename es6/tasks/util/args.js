import yargs from 'yargs'

const args=yargs
.option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
})

.option('watch',{
     boolean:true,
    default:false,
    describe:'watch all scripts'
})

.option('verbose',{
     boolean:true,
    default:false,
    describe:'log'
})

.option('sourcemaps',{
     describe:'force the creation of sroucemaps'
    })

.option('verbose',{
     boolean:true,
    default:8080,
    describe:'sever port'
})

.argv