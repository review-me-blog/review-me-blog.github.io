---
slug: tech-stack
title: 백엔드 기술 스택
tags: [backend]
---

# 백엔드 기술 스택

## 선정 기준

* 우리 프로젝트를 구현하는데 `정말` 필요한가
* 팀원들이 사용하기에 익숙한가

## 기술 스택 및 선택 이유

### Java 17

Spring Boot 3.x를 사용하려면 최소 Java 17 이상 버전 필요

> Java 21을 써야한다.

* 지원 기간이 길다. (17: 2029/9 vs 21: 2031/9)
* 가장 최신 버전이다: 추후 마이그레이션 비용을 고려했을 때 장점
* 기본적으로 17을 기반으로 하기때문에 호환 문제가 없다.
* 새로 추가된 기능들을 사용할 수 있다. (예: Sequenced Collections)

> Java 17을 써야한다.

* 우리 프로젝트를 구현하는데 21에 추가된 기능이 필수적으로 필요하지 않다.
* 21이 제공하는 지원 기간이 필요할만큼 우리 서비스가 지속될지 확실하지 않아서 고려하지 않아도 된다.
* 21은 최신 버전이기때문에 다른 라이브러리나 툴과의 호환성을 확인해야하지 않을까라는 우려
    * Intellij 2023.3 이후 버전에서 지원한다.
    * Gradle 8.5 이상 지원
    * Lombok 1.18.30 지원


결론적으로, 21의 장점이 크지 않기에 팀원 모두에게 익숙한 Java 17을 사용하는 것으로 결정

### Spring Boot 3.3.1

* 버전의 익숙함을 통한 장점이 크지 않음
* 지원 주기가 짧은 특성

가장 최신 버전을 사용하는 것으로 결정

### Gradle v8.8

### Spring Data JPA

### JUnit 5 + AssertJ

### MySQL (Test: H2)

> MariaDB를 사용하자

1. 성능이 더 좋고 빠름

> MySQL를 사용하자

1. 아직 성능 문제로 인한 불편함을 느낀 상황이 아니기에 MariaDB를 쓸 이유가 크지 않음
2. 미션을 진행했던 MySQL이 더 익숙함


우리 프로젝트를 구현하는데 필요한가 의 측면에서 MariaDB의 장점이 크지 않아 팀원들에게 익숙한 MySQL로 결정


### Spring Rest Docs + SwaggerUI

* 프로덕션 코드에 어노테이션 등을 추가하지 않아도 된다는 점에서 Spring Rest Docs로 결정
* 단, 프론트엔드에서 SwaggerUI을 사용하므로 SwaggerUI를 함께 사용

### Lombok

### Slf4j + Logback

스프링 부트에 기본적으로 포함되어있는 Logback로 결정

### Docker

### RestClient

### Github Actions + (Slack API)

젠킨스도 고려했지만 러닝 커브가 높고, 젠킨스에서 제공하는 커스텀 수준까지 필요하지 않다는 점에서 Github Actions로 결정
