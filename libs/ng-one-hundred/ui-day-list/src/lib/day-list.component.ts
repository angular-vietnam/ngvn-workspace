import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'noh-day-list',
  template: `
    <p>day-list works!</p>
    <p>
      Interdum cursus parturient quisque vivamus suscipit aenean ridiculus
      facilisis elementum tincidunt, molestie lacinia metus sit lorem et etiam
      ipsum cubilia ornare blandit, sed pretium sollicitudin dis sagittis
      suspendisse ut rhoncus eget. Orci turpis nulla pharetra dis est et erat
      urna velit cubilia tortor, accumsan lobortis feugiat a praesent curabitur
      eu tellus aptent fringilla. Platea potenti blandit dis aliquam parturient
      nostra duis imperdiet maximus, suscipit hendrerit hac justo mi
      sollicitudin ante eleifend nisl, ultrices elementum vel nunc penatibus
      eget fermentum nam. Penatibus aliquet posuere potenti vestibulum ipsum
      vehicula dolor donec lacus, feugiat auctor blandit congue felis nisl
      sagittis pretium ultricies, quisque hendrerit cras dapibus id cubilia
      aliquam rhoncus. Vitae interdum fringilla ad augue hac nascetur nibh,
      montes accumsan etiam efficitur aliquam class sem libero, ipsum per
      potenti sed a sociosqu. Libero sodales cubilia vestibulum enim nibh
      iaculis himenaeos, ultrices senectus per maecenas metus interdum fringilla
      rhoncus, dictumst sem pharetra ut accumsan faucibus. Senectus inceptos
      accumsan nulla posuere tincidunt dignissim odio at himenaeos neque
      condimentum, ornare tempor a nisl iaculis praesent est aliquam volutpat
      facilisis. Nam sodales finibus habitasse pretium nisl imperdiet ultrices
      ex dui nibh primis, dictumst pellentesque sed vulputate condimentum nostra
      leo rhoncus molestie himenaeos. Eu dictum magna ultrices vulputate arcu
      mauris sapien fringilla eros, erat egestas penatibus duis netus morbi
      gravida adipiscing, nunc dis feugiat est ornare lorem tincidunt torquent.
      Sollicitudin risus facilisis penatibus sit netus dignissim suscipit
      efficitur dolor nulla ex, id tempor quis curae fermentum iaculis mollis
      habitant parturient primis. Nisi nam est dictum congue cursus commodo
      sapien vel pharetra, maecenas hendrerit augue parturient felis dapibus
      lobortis integer. Nulla porttitor vehicula duis nisi venenatis primis
      aliquet consequat, dui quisque elit elementum adipiscing vel faucibus per,
      viverra varius rutrum curae mollis hendrerit egestas. Dolor nisi etiam
      sagittis nisl placerat ad orci magna, lobortis rutrum congue sodales
      libero massa suspendisse commodo, per et egestas vulputate ligula arcu
      montes. Pharetra class at suspendisse potenti ipsum nibh felis lectus
      massa, molestie neque arcu mauris ridiculus turpis dictumst sociosqu.
      Nulla quam vestibulum ut iaculis proin ipsum dictum hac maecenas massa
      euismod primis id, mattis per interdum donec nunc quis imperdiet fusce
      conubia habitasse malesuada. Netus ullamcorper arcu pharetra feugiat
      potenti tincidunt bibendum neque ultricies, donec nostra id ante volutpat
      auctor penatibus quam, quis himenaeos efficitur phasellus nibh proin nec
      etiam. Auctor convallis phasellus sodales consectetur molestie fusce
      sociosqu nisi dolor at, elit etiam tincidunt libero mi efficitur id varius
      potenti, nam ligula risus eget justo velit vel maecenas ac. Montes
      ridiculus condimentum scelerisque eu eget diam consequat finibus, id
      semper taciti ultricies proin neque metus potenti, cursus nascetur nam
      fames vehicula amet netus. Magna aliquam eros neque vestibulum conubia
      porta lobortis feugiat, nascetur himenaeos porttitor lacinia augue
      bibendum felis placerat tempus, lorem penatibus montes maecenas ex cursus
      semper. Integer vitae vivamus congue sociosqu ornare dapibus est tempor,
      mauris aenean auctor accumsan sem euismod metus ac lacus, ad elit pretium
      nunc lectus potenti dictumst. Nostra netus efficitur donec tristique in
      nascetur tempus ac, id suspendisse viverra porttitor est malesuada. Nec
      torquent vivamus maecenas potenti platea porta rhoncus netus ex, viverra
      molestie phasellus rutrum augue sagittis integer urna. Malesuada a
      torquent nulla netus nascetur neque taciti tellus metus in bibendum luctus
      senectus, eu condimentum congue per ipsum suspendisse adipiscing et massa
      hac finibus. Placerat accumsan gravida maximus luctus penatibus conubia
      praesent dolor ut nisi tempor, donec scelerisque habitant fusce etiam nisl
      parturient orci eget cursus finibus fringilla, leo consequat rhoncus
      feugiat pretium odio potenti condimentum pulvinar sodales. Blandit est
      sollicitudin sagittis id eleifend metus et nisl viverra vehicula fames
      integer ullamcorper, quis amet orci venenatis commodo accumsan mauris
      placerat non per tincidunt mus. Orci facilisi ex turpis gravida elit
      blandit dolor, varius ligula a magnis feugiat habitasse parturient
      tristique, fames viverra himenaeos mattis lobortis molestie. In dui
      ullamcorper aliquam a aliquet sociosqu consectetur magnis, per
      sollicitudin fringilla consequat blandit penatibus metus habitasse, hac
      lorem scelerisque est fusce nostra fames. Aenean ipsum praesent blandit
      commodo magnis euismod fringilla, class hac nascetur laoreet sit dis, et
      quisque venenatis hendrerit elementum vestibulum. Aenean faucibus
      fermentum semper dui ut platea venenatis convallis ac tortor vel,
      vulputate tempor scelerisque morbi rhoncus mattis sit praesent felis
      viverra sagittis, leo vitae interdum cursus primis sodales quisque
      bibendum proin consectetur. Pretium commodo non sem ac posuere quis
      laoreet consectetur et primis rhoncus, condimentum in mauris neque
      nascetur integer phasellus nulla nostra erat, metus leo lacus feugiat
      cubilia hendrerit etiam euismod dictum dapibus. Sit primis senectus
      vivamus elementum fames semper aptent rutrum suscipit gravida vehicula,
      quam libero conubia est ligula natoque finibus lorem pretium dis
      facilisis, leo odio sagittis class donec ultricies ornare laoreet lacinia
      euismod. Dictum tempus conubia varius montes lacinia ipsum diam ad ornare
      cubilia, cras pellentesque vel rutrum donec porttitor gravida tincidunt
      justo ante, mattis metus sociosqu suscipit a et tempor phasellus quam.
      Pharetra arcu porta primis facilisis duis varius vel tempor enim potenti,
      mattis cubilia proin fermentum maximus turpis ornare sociosqu suscipit,
      phasellus et leo non etiam nec ridiculus lacus sollicitudin. Quam nec mi
      aliquet lacinia fames vel turpis et natoque hendrerit, quisque curabitur
      sed molestie in condimentum sapien litora cursus ultrices eu, tellus
      fringilla aliquam magna praesent dolor est varius vitae. Magna penatibus
      natoque tempus erat facilisis neque rhoncus accumsan, maecenas tincidunt
      nunc purus vel amet luctus litora, aliquet tortor dolor nibh ultricies
      nisl aenean. Justo sollicitudin mus nibh vitae lobortis libero finibus
      quam venenatis, molestie imperdiet viverra primis montes suspendisse ex
      sapien, duis iaculis placerat rhoncus a gravida rutrum velit. Eget
      fringilla leo habitant tortor risus molestie hendrerit montes fusce, nec
      per viverra commodo duis faucibus ligula netus, nisl habitasse ipsum
      consectetur metus placerat magna sit. Senectus sem platea neque finibus
      imperdiet in rutrum, tristique est odio eu bibendum vehicula ligula,
      vulputate egestas diam urna suspendisse vivamus. Praesent dolor vehicula
      orci fames ornare vestibulum gravida, tincidunt cubilia condimentum
      feugiat et velit sem fermentum, urna diam fusce viverra pellentesque
      auctor. Non scelerisque quisque iaculis diam a bibendum sollicitudin risus
      donec turpis, cras viverra nunc odio nibh rhoncus sem litora aptent ipsum,
      eget ultrices tempus mus lacinia proin dis dictumst vulputate. A facilisi
      sapien ac felis scelerisque magnis netus ridiculus, pulvinar vitae ligula
      in varius pellentesque condimentum gravida dictum, aenean conubia class
      sociosqu natoque eget rutrum. Enim eget sed sapien adipiscing id suscipit
      mauris dolor bibendum fermentum lectus fusce, lorem praesent varius nisi
      lacinia commodo ipsum justo vehicula laoreet. Netus fames in ligula luctus
      litora senectus auctor per, nibh imperdiet risus tincidunt et id feugiat,
      vulputate dolor morbi ante cras vehicula vitae. Augue at per donec primis
      penatibus vivamus condimentum tellus urna phasellus ad, lobortis felis
      finibus arcu aptent habitant bibendum fusce proin nulla. Gravida habitasse
      est amet litora blandit id scelerisque egestas turpis parturient, laoreet
      nibh ipsum natoque nascetur ut euismod duis. At lacinia phasellus eu ante
      porta euismod odio, dictum urna rutrum facilisi tincidunt pulvinar curae,
      libero elementum arcu ex magna habitant. Feugiat vel quisque libero ipsum
      lacus aliquam, maecenas lorem magnis cubilia accumsan est lobortis, hac
      rhoncus suspendisse dignissim mauris. Orci per ultrices urna donec montes
      suspendisse molestie class interdum senectus, tincidunt praesent phasellus
      imperdiet dis congue aliquet mollis arcu. Sollicitudin non ut aptent
      torquent inceptos mauris sed augue nullam varius, sociosqu ornare magna
      placerat ante at facilisis fermentum. Laoreet ultrices hac libero inceptos
      nascetur curae tincidunt purus maecenas suscipit iaculis tempor luctus,
      amet egestas faucibus nam convallis proin neque conubia lacus consectetur
      orci euismod.
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayListComponent implements OnInit {
  @HostBinding('attr.id') hostId = 'ngOneHundredDayList';

  constructor() {}

  ngOnInit(): void {}
}
