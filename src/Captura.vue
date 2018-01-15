<template>

    <div class="col-lg-6" id="form-container">
        <form>
            <div class="panel panel-info">
                <div class="panel-heading">
                    <div class="panel-title">
                        Preencha seus dados para receber contato
                    </div>
                </div>

                <div v-if="sucesso" class="alert alert-success">
                    Dados enviados com sucesso! Em breve entraremos em contato.
                </div>

                <div class="panel-body">
                    <fieldset v-if="passo == 1">
                        <div class="row form-group">
                            <div class="col-lg-6">
                                <label>Nome Completo *</label>
                                <input name="nome" type="text" v-model="visitante.nome" v-validate="'required|alpha_spaces|min:2'" class="form-control" autofocus>
                                <span v-show="errors.has('nome')" class="text-danger">{{ errors.first('nome') }}</span>
                            </div>

                            <div class="col-lg-6 valid">
                                <label>Data de Nascimento *</label>
                                <input type="text" name="data_nascimento" v-model="visitante.data_nascimento" data-vv-as="data de nascimento" v-validate="'required|date_format:DD/MM/YYYY'" v-mask="'##/##/####'" class="form-control">
                                <span v-show="errors.has('data_nascimento')" class="text-danger">{{ errors.first('data_nascimento') }}</span>
                            </div>
                        </div>

                        <div class="row form-group ">
                            <div class="col-lg-6 valid">
                                <label>Email *</label>
                                <input type="email" name="email" v-model="visitante.email" v-validate="'required|email'" class="form-control">
                                <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                            </div>

                            <div class="col-lg-6 valid">
                                <label>Telefone com DDD *</label>
                                <input type="text" name="telefone" v-model="visitante.telefone" v-validate="'required|min:15|max:15'" v-mask="'(##) #####-####'" class="form-control">
                                <span v-show="errors.has('telefone')" class="text-danger">{{ errors.first('telefone') }}</span>
                            </div>
                        </div>

                        <div>
                            <button type="button" :disabled="errors.any()" @click="define_passo('avancar')" class="btn btn-lg btn-info next-step">Próximo Passo</button>
                        </div>
                    </fieldset>
                    <fieldset v-if="passo == 2">
                        <div class="row form-group">
                            <div class="col-lg-6 seg">
                                <label>Região</label>
                                <select class="form-control" v-model="visitante.regiao" id="reg">
                                    <option value="" disabled>Selecione a região</option>
                                    <option v-for="regiao in regioes" :value="regiao">{{regiao}}</option>
                                </select>
                            </div>

                            <div class="col-lg-6" v-if="visitante.regiao !== null">
                                <label>Unidade</label>
                                <select class="form-control" v-model="visitante.unidade">
                                    <option v-for="unidade in define_unidades" :value="unidade">{{unidade}}</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div v-if="!sucesso">
                                <button type="button" @click="define_passo('voltar')" class="btn btn-lg btn-danger ret-step">Voltar Passo</button>
                                <button type="button" @click="enviar" class="btn btn-lg btn-info next-step last-step">Enviar</button>
                            </div>
                            <div v-else>
                                <button  type="button" @click="finalizar" class="btn btn-lg btn-success next-step last-step pull-right">Finalizar</button>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {STORAGE_KEY} from './main.js';

export default {

    name: 'lp-captura',
    data () {
        return {

            visitante: {
                nome: null,
                data_nascimento: null,
                email: null,
                telefone: null,
                regiao: null,
                unidade: null,
                pontuacao: 10,
                idade: null
            },
            passo: 1,
            regioes: ['Norte', 'Nordeste', 'Sul', 'Sudeste', 'Centro-Oeste'],
            carregando: false,
            data_atual: new Date('2016-06-01'),
            sucesso: false
        }
    },
    computed:
    {
        define_unidades()
        {
            switch(this.visitante.regiao)
            {
                case 'Norte':
                    return [];
                case 'Nordeste':
                    return ['Salvador', 'Recife'];
                case 'Sul':
                    return ['Porto Alegre', 'Curitiba'];
                case 'Sudeste':
                    return ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'];
                case 'Centro-Oeste':
                    return ['Brasília'];
                default:
                    return [];
            }
        }
    },
    methods:
    {
        define_passo(acao)
        {
            if(acao == 'avancar')
            {
                this.passo++;
            }
            else if(acao == 'voltar')
            {
                this.passo--;
            }
        },
        enviar()
        {
            this.visitante.idade = this.define_idade();
            this.visitante.pontuacao = this.calcula_pontuacao(this.visitante.pontuacao);

            // salva local
            this.salva_local(this.visitante);

            this.sucesso = true;
        },

        // efetua os calculos das pontuações
        calcula_pontuacao(pontuacao_atual)
        {
            pontuacao_atual -= this.desconta_por_regiao();
            pontuacao_atual -= parseInt(this.desconta_por_idade());

            console.log( pontuacao_atual);

            return pontuacao_atual;
        },

        // calcula por regiao
        desconta_por_regiao()
        {
            let desconto = 0;
            switch(this.visitante.regiao)
            {
                case 'Norte':
                    desconto = 5;
                break;
                case 'Nordeste':
                    desconto = 4;
                break;
                case 'Sul':
                    desconto = 2;
                break;
                case 'Sudeste':
                    if(this.visitante.unidade !== 'São Paulo')
                    {
                        desconto = 1;
                    }
                break;
                case 'Centro-Oeste':
                    desconto = 3;
                break;
            }
            return desconto;
        },
        desconta_por_idade()
        {
            let desconto = 0;
            if(this.visitante.idade < 18 || this.visitante.idade >= 100)
            {
                desconto = 5;
            }
            else if(this.visitante.idade >= 40 && this.visitante.idade < 99)
            {
                desconto = 3;
            }
            return desconto;
        },

        define_idade()
        {
            var data_atual = new Date(this.data_atual);
            // quebra a data em partes
            var data_nasc_partes = this.visitante.data_nascimento.split("/");
            var data_nascimento_formatada = new Date(data_nasc_partes[2], data_nasc_partes[1], data_nasc_partes[0]);

            var idade = data_atual.getFullYear() - data_nascimento_formatada.getFullYear();
            var mes = data_atual.getMonth() - data_nascimento_formatada.getMonth();
            // resolve a diferenca de meses
            if (mes < 0 || (mes === 0 && data_atual.getDate() < data_nascimento_formatada.getDate())) {
                idade--;
            }
            return idade;
        },

        /**
         * Salva os dados usando uma KEY combinando com o e-mail do visitante.
         */
        salva_local(data)
        {
            localStorage.setItem(STORAGE_KEY + data.email, JSON.stringify(data));
        },

        finalizar()
        {
            location.reload();
        }
    }
}
</script>
