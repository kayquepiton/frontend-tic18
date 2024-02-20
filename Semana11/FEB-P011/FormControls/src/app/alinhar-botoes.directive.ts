import { Directive, ElementRef, Renderer2, Input, AfterViewInit, ContentChildren, QueryList } from '@angular/core';

@Directive({
  selector: '[appAlinharBotoes]'
})
export class AlinharBotoesDirective implements AfterViewInit {
  @Input() espacamentoVertical = '20px'; // Ajuste a distância conforme necessário
  @Input() larguraBotao = '150px'; // Ajuste a largura conforme necessário

  @ContentChildren('botoes') botoes!: QueryList<any>;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.alinharBotoes();
  }

  private alinharBotoes() {
    this.botoes.forEach(b => {
      this.renderer.setStyle(b.nativeElement, 'display', 'block');
      this.renderer.setStyle(b.nativeElement, 'margin-top', this.espacamentoVertical);
      this.renderer.setStyle(b.nativeElement, 'width', this.larguraBotao);
      this.renderer.setStyle(b.nativeElement, 'max-width', this.larguraBotao + ' !important');
      this.renderer.setStyle(b.nativeElement, 'min-width', this.larguraBotao + ' !important');
  
      // Adiciona um espaço não quebrável ao conteúdo
      const content = b.nativeElement.textContent;
      this.renderer.setProperty(b.nativeElement, 'textContent', content + '\u00A0');
    });
  }
  
  
}
