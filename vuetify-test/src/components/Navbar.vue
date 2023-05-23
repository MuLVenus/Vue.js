<template>
    <nav>

        <v-toolbar>
            <v-app-bar-nav-icon @click.stop="$event=>drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Venus</v-toolbar-title>
            <v-btn icon> 
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon> 
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group">
                    <v-list-item v-for="(item,i) in items" :key="i" :to="item.router">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default{
    data:()=>({
        drawer:false,
        group:null,
        items:[
            {icon:'mdi-domain',text:'dashboard',router:'/'},
            {icon:'mdi-inbox',text:'my project',router:'/MyProject'},
            {icon:'mdi-account-multiple',text:'team',router:'/Team'},
            {icon:'mdi-school',text:'education',router:'/Education'},
            ],
    })
}
</script>