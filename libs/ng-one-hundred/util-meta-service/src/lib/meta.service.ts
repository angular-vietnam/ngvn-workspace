import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Day } from '@ngvn/ng-one-hundred/data-access-day';
import { environment } from '@ngvn/shared/environments';

@Injectable({ providedIn: 'root' })
export class MetaService {
  private readonly defaultImage =
    'https://scontent-ort2-1.xx.fbcdn.net/v/t1.6435-9/104183198_2684957788428309_6477951481849921505_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8631f5&_nc_ohc=XhbHRMzBFqkAX8mtiGa&_nc_ht=scontent-ort2-1.xx&oh=4fc4940c778aeb933ca1610563ec8d7e&oe=61928014';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private readonly dom: Document
  ) {}

  update(day: Day) {
    this.title.setTitle(MetaService.getTitle(day.title));

    this.meta.updateTag({
      property: 'og:type',
      content: 'article',
    });

    if (day.authors) {
      this.meta.updateTag({
        proeprty: 'article:author',
        content: day.authors.join(', '),
      });
    }

    this.meta.updateTag({
      property: 'og:title',
      content: day.title,
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: day.title,
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: day.description,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: day.description,
    });

    this.meta.updateTag({
      name: 'description',
      content: day.description,
    });

    this.meta.updateTag({
      property: 'og:url',
      content: day.url,
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content: this.defaultImage, // TODO: support Cover Image from Notion
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    // TODO: author in Twitter
    // this.meta.updateTag({
    //   name: 'twitter:creator',
    //   content: 'Nartc1410',
    // });

    this.meta.updateTag({
      property: 'og:image',
      content: this.defaultImage, // TODO: support Cover Image from Notion
    });

    this.updateCanonical(day.url);
  }

  updateTagTitle(tagName: string) {
    this.resetMeta();
    this.title.setTitle(MetaService.getTitle(tagName));
  }

  resetMeta() {
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:description'");
    this.meta.removeTag("property='og:url'");
    this.meta.removeTag("name='twitter:title'");
    this.meta.removeTag("name='twitter:description'");
    this.meta.removeTag("name='keywords'");

    this.meta.updateTag({
      name: 'description',
      content: '100 days of Angular',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.defaultImage,
    });

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary',
    });

    this.meta.updateTag({
      name: 'twitter:creator',
      content: 'Nartc1410',
    });

    this.meta.updateTag({
      property: 'og:image',
      content: this.defaultImage,
    });
    this.title.setTitle('100 days of Angular');
    this.updateCanonical();
  }

  private static getTitle(title: string) {
    return `${title} | 100 days of Angular`;
  }

  private updateCanonical(url: string = environment.baseUrl) {
    let head = this.dom.querySelector('head');
    if (head != null && Array.isArray(head)) {
      head = head[0];
    }
    let element: HTMLLinkElement | null =
      this.dom.querySelector(`link[rel='canonical']`) || null;
    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head?.appendChild(element);
    }
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', url);
  }
}
